# Small Web Goggle

A Brave Search Goggle generated from Kagi's Small Web list.

The generated `smallweb.goggle` discards sites not in the Small Web list.

## Usage

Build the Goggle:

```sh
deno task build
```

Submit the generated Goggle to Brave Search:

```sh
deno task submit
```

## Automation

The GitHub Actions workflow in `.github/workflows/update.yaml` runs daily, rebuilds `smallweb.goggle`, commits changes when the upstream list changes, and submits the updated Goggle.
