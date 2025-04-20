# 部署 图床
:::warning
此部分由作者自编
:::
首先点下面的按钮

[![Powered-By-Vercel](/Powered-By-Vercel.png)](https://vercel.com/new/yangrenruiyrrs-projects/clone?repository-url=https://github.com/YANGRENRUIYRR/Github-Image)

然后就一直继续，再最后配置Vercel环境变量`GITHUB_USERNAME`为Github用户名、`GITHUB_REPO`为空仓库（新建一个）的仓库名、`GITHUB_TOKEN`为Github的一个Token，要有repo的所有权限。

接着打开`Actions`页面，启用`Upstream Sync`。

最后在原来的空仓库中新建`.github/workflows/empty-repo.yml`，内容为
```yaml
name: Clear Repository

on:
  schedule:
    - cron: '0 16 * * *'  # UTC时间16点对应UTC+8的0点
  workflow_dispatch: 
    
jobs:
  clear-repo:
    runs-on: ubuntu-latest
    permissions:
      contents: write  # 允许推送更改
    steps:
    - name: Checkout repository
      uses: actions/checkout@v4
      with:
        persist-credentials: false  # 不使用默认的 GITHUB_TOKEN

    - name: Delete files and directories
      run: |
        # 删除除 .git 和 .github 外的所有内容
        find . -mindepth 1 -maxdepth 1 -not \( -name ".git" -o -name ".github" \) -exec rm -rf {} +

    - name: Commit and push changes
      env:
        PERSONAL_ACCESS_TOKEN: ${{ secrets.MY_GITHUB_TOKEN }}
      run: |
        git config --global user.email "<你的Email>"
        git config --global user.name "<你的用户名>"
        git add .
        
        # 检查是否有变更需要提交
        if [ -n "$(git status --porcelain)" ]; then
          git commit -m "每日清空仓库（UTC+8 零点）"
          git push https://${PERSONAL_ACCESS_TOKEN}@github.com/${{ github.repository }}.git
        else
          echo "无变更可提交。"
        fi    

```
并配置`secrets`中的`MY_GITHUB_TOKEN`为Vercel环境变量`GITHUB_TOKEN`，`<>`包裹的内容要根据实际修改。