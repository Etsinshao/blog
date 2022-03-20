function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, "SOCKS5 127.0.0.1:7890")) {
    return "DIRECT";
  } else {
    return "SOCKS5 127.0.0.1:7890; DIRECT";
  }
}