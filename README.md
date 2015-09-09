# pinterest-mini-api
A hacked api for extracting last pins URLs of any board or page in Pinterest.com

## Usage
This mini api hosts a HTTP server that you can send get requests to. First you need to start it like this:

```shell
git clone https://github.com/ImanMh/pinterest-mini-api.git
cd pinterest-mini-api
node main.js
```

This will start the server. The next step is to make get requests to this server. Use Postman(chrome extension) or a simple Javascript xhr request. Here is the parameters you need to make the request:

<table>
  <tr>
    <td></td>
    <td></td>
    <td>description</td>
  </tr>
  <tr>
    <td>base url</td>
    <td>/pins</td>
    <td>The path server is listening on requests (http://localhost:30000/pins)</td>
  </tr>
  <tr>
    <td>parameter</td>
    <td>target</td>
    <td>specify the url of the page you want to get it's pins</td>
  </tr>
</table>
