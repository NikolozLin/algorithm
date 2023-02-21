#!/bash
cupuse= `ps -aux |grep 150.py | grep -v grep| awk'{print$3}'`
echo cupuse
if [ `echo "$a < $b"|bc` -eq 1 ] ; then
echo  "$a < $b "
echo “3222”
else
echo "$a > $b "
fi

