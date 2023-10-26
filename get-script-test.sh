targetSubDir=""

if [ "$gitRepository" == "prd-web" ]; then
        gitUrl="$gitProtocol$medicityToken@$gitPublicUrl/$subDirName/client.git"
        targetSubDir="$targetDir/client"
else
        gitUrl="$gitProtocol$medicityToken@$gitPublicUrl/$subDirName/admin-client.git"
        targetSubDir="$targetDir/admin-client"
fi

echo "gitUrl : $gitUrl"
echo "targetSubDir : $targetSubDir"
echo "envFile : $envFile"

if [ -z $branchName ]; then
        branchName="main"
fi

gitCli=""
if [ ! -d $targetSubDir ]; then
        mkdir -p $targetSubDir
        cd $targetSubDir
        gitCli="clone"
        git clone $gitUrl $targetSubDir
else
        cd $targetSubDir
        gitCli="pull"
        git fetch --all
        git reset --hard origin/$branchName
        git pull $gitUrl $branchName
fi

echo "gitCli : $gitCli($branchName)"
lastCommitHash=`git log -1 --format="%H"`
echo "---------------------------- COMMIT MESSEGE -------------------------------"
echo "lastCommitHash : `git log -1 --pretty=format:"%h - %an, %ar : %s"`"
echo "---------------------------- COMMIT MESSEGE -------------------------------"
echo ""
echo "-------------------------------------- GIT SYNC END ---------------------------------------------"
echo ""
echo ""
