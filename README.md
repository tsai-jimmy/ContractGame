# ContractGame
eth contract deploy test

# 安装Env

```
npm install -g truffle
npm install -g ganache-cli
```

# Test

```
$ truffle version
```

# 运行环境

```
$ ganache-cli
```

# 编译合约

```
$ truffle compile
$ truffle compile --compile-all
```

# 部署合约

```
$ truffle migrate
```

# 测试合约

```
truffle(development)> contract.say()
'Hello world'
truffle(development)> contract.say.call()
'Hello world'
truffle(development)> contract.print("print Hello")
'print Hello'
```
