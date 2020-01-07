$host.UI.RawUI.BackgroundColor = "Blue"
$host.UI.RawUI.ForegroundColor = "Red"
Write-Output 'RUN CONTAINER node1'
docker rm node1 -f
docker run --rm -d -p 3000:3000/tcp --name node1 mdimai666/doc1:latest
[Console]::ResetColor()
Write-Output ' '