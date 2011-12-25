@echo off

set Path=%~dp0

cd ~\AppData\Roaming\npm\node_modules\npm\

del npmrc.bak
ren npmrc npmrc.bak

echo prefix = %Path%~\AppData\Roaming\npm
echo prefix = %Path%~\AppData\Roaming\npm >>npmrc

cd %Path%
start cmd %Path%