module.exports = {
	types: [
		{ value: 'feat', name: 'feat: 新功能' },
		{ value: 'fix', name: 'fix: 修复问题' },
		{ value: 'docs', name: 'docs: 文档变更' },
		{ value: 'style', name: 'style: 代码格式' },
		{ value: 'refactor', name: 'refactor: 代码重构' },
		{ value: 'perf', name: 'perf: 性能优化' },
		{ value: 'test', name: 'test: 测试相关' },
		{ value: 'build', name: 'build: 构建相关' },
		{ value: 'ci', name: 'ci: CI 相关' },
		{ value: 'chore', name: 'chore: 杂项' },
		{ value: 'revert', name: 'revert: 回滚' },
	],
	scopes: [],
	allowCustomScopes: true,
	allowEmptyScopes: true,
	subjectLimit: 100,
}
