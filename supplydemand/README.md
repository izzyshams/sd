# Django Site

This directory contains the working code for the Django powered supdem website.

## Additional Libs

* Bootstrap Edge template: http://django-edge.readthedocs.io/en/latest/

## Notes

### Rest APIs

Representational State Transfer (Rest) apis are used for response handling of of the server-side portion of an application. Many Google api's are rest apis.

 * Build rest api on [Node.js](https://medium.com/of-all-things-tech-progress/5-steps-to-build-a-rest-api-in-node-js-with-mongodb-e1f2113a39bd)


### Working with SSH keys

#### Neccesities

##### Generate a new ssh keypair using rsa encryption

```
$ ssh-keygen -t rsa -f ~/.ssh/id_rsa
```
This will spit out two files into `~/.ssh/`:
 * `id_rsa`
 * `id_rsa.pub`

You are authenticated on the server by comparing with your public key (`id_rsa.pub`) and the exact contents of your public key must be listed as its own line on your server account under `~/.ssh/authorized_keys`.

##### Copy your public key to your account on a remote host

```
$ ssh-copy-id -i ~/.ssh/mykey user@host
```
The process of adding your pubkey to the server can be simplified using the above command.

`-i`: denotes the location of your public key

the next argument is the `username@hostname` of the server you wish to copy your public key too.

When this is copied on you do not need to use a password to ssh into the server, you can simply type `ssh user@hostname` and you will instantly be logged in.
 
##### Change the passphrase used to unlock an existing ssh keypair
```
$ $ ssh-keygen -p -f ~/.ssh/id_rsa
```

As time goes on you may want to change your private key's passphrase. You use your passphrase the first time you try to login using your sshkeys within a terminal sesion.
