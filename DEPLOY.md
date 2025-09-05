# 部署说明

## netlify

### 编译

```sh
nuxt build --preset=netlify_edge
```

### 部署配置

- Publish directory：dist
- Functions directory：.netlify/edge-functions/server
