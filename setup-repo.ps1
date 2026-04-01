$env:Path = $env:Path + ";C:\Program Files\Git\cmd"
& "C:\Program Files\GitHub CLI\gh.exe" repo create vantage-demopage --public --source=. --remote=origin --push
