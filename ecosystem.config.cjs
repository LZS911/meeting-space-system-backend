module.exports = {
  apps: [
    {
      name: 'meeting-space-system-backend',
      script: './packages/backend/dist/main.js',
      env: {
        NODE_ENV: 'production',
      },
      error_file: './log/err.log',
      out_file: './log/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
    },
  ],
};
