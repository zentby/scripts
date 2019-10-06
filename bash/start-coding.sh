# Front end (NPM project)
FE=<front-end repo path>

# Back end (dotnet core project)
BE=<back-end repo path>

runUI() {
    if ! nc -z localhost 7000
    then
        cd $FE
        git pull
        npm install
        npm start
    else
        echo "UI is already running"
    fi
}

runApi() {
    if ! nc -z localhost 50617
    then
        # Uncomment for dependent service
        # while ! nc -z localhost 8899 </dev/null; do sleep 1; done
        cd $BE
        git pull
        dotnet run
    else
        echo "API is already running"
    fi
}

cdir=$(pwd)

(trap 'kill 0' SIGINT; runApi & runUI)

cd $cdir
