/*var proxy = 'SOCKS5 127.0.0.1:1080';
* var socks = 'SOCKS5 127.0.0.1:1080';
* var http = 'SOCKS5 127.0.0.1:1080';
*/

function FindProxyForURL(url, host) {

  if (isPlainHostName(host) ||
      dnsDomainIs(host, "SOCKS5 127.0.0.1:7890")) {
    return "DIRECT";
  } 

  else if (shExpMatch(host, "*.onion"))
    return "SOCKS5 127.0.0.1:9050; " +
           "HTTP 127.0.0.1:8118";

  else {
    return "SOCKS5 127.0.0.1:7890; DIRECT";
  }

}