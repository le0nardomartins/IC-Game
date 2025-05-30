@echo off
echo Iniciando Uma Jornada no Nosso Tempo...
echo.

:: Verifica se o Node.js está instalado
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Erro: Node.js não encontrado!
    echo Por favor, instale o Node.js de https://nodejs.org/
    pause
    exit /b 1
)

:: Verifica se as dependências estão instaladas
if not exist node_modules (
    echo Instalando dependências...
    call npm install
    if %ERRORLEVEL% NEQ 0 (
        echo Erro ao instalar dependências!
        pause
        exit /b 1
    )
)

:: Inicia o jogo
echo Iniciando o jogo...
call npm start

pause 