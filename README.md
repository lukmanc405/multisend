# copy repo

```
git clone https://github.com/lukmanc405/multisend.git
```
# Enter folder multisend

```
cd multisend
```
# install node js

```
curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```

```
npm i
```
# add sc
```
nano transfer.js
```
# privkey
```
nano config.js
```

# Run
```
chmod +x run_transfer.sh
```

# enter screen 

```
screen -S multisend
```
# start multisend

```
./run_transfer.sh
```


# Running backround (close screen)

CTRL + A ,Then Press D

proses akan selesai kurleb 3 jam , setelah 3 jam jgn lupa cek saldo avail lalu jalankan lagi