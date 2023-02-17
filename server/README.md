# NmdBnb Server

## Prerequisites

- poetry

  To fix `pylance (reportMissingImports)` warning while using `poetry`. In a terminal before get in to `poetry shell`, type:

  ```sh
  poetry config virtualenvs.in-project true
  ```

### Install `poetry`

```sh
$ brew update curl
$ brew install poetry
```

## Run Server

```sh
$ poetry shell
$ python3 manage.py runserver
```
