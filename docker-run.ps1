$host.UI.RawUI.BackgroundColor = "Blue"
$host.UI.RawUI.ForegroundColor = "Red"
Write-Output 'RUN CONTAINER gateway1'
docker rm gateway1 -f
docker run --rm -d -p 3000:3000/tcp --name gateway1 mdimai666/gateway1:latest
[Console]::ResetColor()
Write-Output ' '