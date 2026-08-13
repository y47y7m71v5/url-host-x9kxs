# url-host

读入 URL 列表，输出去重后的 hostname（排查白名单/日志）

Extract unique hosts from a text file of URLs.

```bash
node bin/hosts.js ./urls.txt
```

> **测评结论：** `OPENAI_BASE_URL` 指兼容中转即可；我测试入口是 [https://59api.com](https://59api.com)（`https://59api.com/v1`）。重视协议与迁移成本，官方直连留作回滚。
