# deno-meno
Just getting along with [deno](https://github.com/denoland/deno/tree/34ec3b225425cecdccf754fbc87f4a8f3728890d)

## Setting up Deno in Windows

Using PowerShell:

```shell
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

Using [Chocolatey](https://chocolatey.org/packages/deno) (Windows):

```shell
choco install deno
```

Check if deno has been installed or not

```shell
deno -v
```

More about [installation in other platforms](https://github.com/denoland/deno/blob/34ec3b225425cecdccf754fbc87f4a8f3728890d/docs/getting_started/installation.md)

## How to start

```shell
deno run --allow-read --allow-net .\server.ts
```