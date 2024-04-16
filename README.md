# 预约会议室后台管理系统

## 技术栈

### front

[React](https://react.dev/)

### backend

[Nest](https://docs.nestjs.com/)

### DB

[MySQL](https://www.mysql.com/cn/)

## Dev Start

### 使用 Docker 进行开发

1. 安装 [Docker](https://docs.docker.com/engine/install/)
2. 安装 [Docker compose](https://docs.docker.com/compose/install/)
3. 启动 docker 服务
4. 安装 Make （可选）
5. 安装 Make 后执行 `make local`, 未安装的情况直接执行 `docker-compose stop && docker-compose -f docker-compose.yaml up --build -d --remove-orphans`
6. 查看 docker 容器状态，若正常启动后，前端服务地址：`http://{ip}:7879`， 后端服务地址：`http://{ip}:7878`，mysql 端口：`3306`

### 本地进行开发

1. 使用 `npm install pnpm -g` 安装 pnpm
2. 执行 `pnpm install -r`
3. 修改 `packages/backend/.env` 内容，将其调整为你需要链接的 mysql 服务
4. 执行 `pnpm start:backend`， 启动后端服务，端口号为 `3535`
5. 修改 `packages/frontend/vite.config.ts` 中的 proxy 项，将其调整为: `{'/v': 'http://{ip}:3535'}`
6. 执行 `pnpm start:frontend`, 启动前端服务，端口号为 `7879`

### VsCode 环境同步（可选）

下载 vscode 插件：`Dev Containers`
