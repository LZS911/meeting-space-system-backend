# remove <none> images
if [ -n "$(docker images -q -f dangling=true)" ]; 
then docker rmi $(docker images -q -f dangling=true); 
fi


# remove unused volume
volumes=$(docker volume ls -qf "dangling=true")

if [ ! -z "$volumes" ]; then
    echo "Removing volumes: $volumes"
    echo "$volumes" | xargs docker volume rm
fi