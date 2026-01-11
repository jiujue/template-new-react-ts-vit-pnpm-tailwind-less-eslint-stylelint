import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// https://vite.dev/config/
function escapeRegex(value) {
	return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export default defineConfig(({ mode }) => {
	const rootDir = fileURLToPath(new URL('.', import.meta.url))
	const env = loadEnv(mode, rootDir, '')
	const proxyPrefix = env.VITE_PROXY_PREFIX || '/api'
	const proxyTarget = env.VITE_PROXY_TARGET || 'http://localhost:3000'

	return {
		plugins: [react()],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		server: {
			port: 5173,
			strictPort: true,
			proxy: {
				[proxyPrefix]: {
					target: proxyTarget,
					changeOrigin: true,
					secure: false,
					rewrite: (path) => path.replace(new RegExp(`^${escapeRegex(proxyPrefix)}`), ''),
				},
			},
		},
	}
})
