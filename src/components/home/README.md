# 首页 Three.js 球体动画组件

## 🎯 组件说明

### RotatingSphere 组件
- **位置**: `/src/components/home/RotatingSphere.js`
- **功能**: 全屏Three.js球体动画，支持贴图切换和交互控制

### HomePage 组件  
- **位置**: `/src/pages/index.tsx`
- **功能**: 首页容器，包含RotatingSphere组件

## 🎮 交互功能

### 自动旋转
- 球体绕Y轴匀速自转（每帧旋转0.005弧度）
- 在不进行鼠标交互时持续旋转

### 鼠标拖拽控制
- **按住左键拖拽**: 控制球体视角旋转
- **松开鼠标**: 停止跟随，恢复自动旋转
- **鼠标样式**: `grab` → `grabbing` 动态变化

### 贴图切换
- **点击页面任意位置**: 随机切换球体贴图
- **支持格式**: JPG, PNG, GIF, WEBP, MP4, WEBM, MOV
- **视频贴图**: 自动静音、循环播放、自动开始

## 🗂️ 媒体文件扫描

组件会自动扫描以下路径的媒体文件：

```
/public/inspiration_assets/
├── ComPotte Branding_assets/
│   ├── 11.jpg, 12.jpg, 13.png, 14.jpg
│   ├── ComPotte Branding.mp4
│   └── cover.mp4
├── entropy-visual-identity_assets/
│   ├── 11.jpeg, 12.mp4
│   ├── cover.mp4
│   └── Entropy visual identity.mp4
├── alias.gif
├── Gray Matter Branding.mp4
├── Hiii Illustration.png
├── MAGE Degree Show .webp
└── OpenAI — Devday.mp4
```

## 🚀 如何集成到现有应用

### 方式1: 作为独立路由页面
```javascript
// 在App.js中添加首页路由
import HomePage from './pages/index';

// 在路由组件中使用
case 'home':
  return <HomePage />;
```

### 方式2: 作为模态组件
```javascript
// 在需要的地方导入
import RotatingSphere from './components/home/RotatingSphere';

// 作为全屏模态使用
{showAnimation && <RotatingSphere />}
```

### 方式3: 临时测试
在 `src/App.js` 中临时添加：
```javascript
import HomePage from './pages/index';

// 在renderContent函数中添加
case 'home':
  return <HomePage />;

// 在Sidebar导航中添加home选项（如需要）
```

## 📋 技术规格

### Three.js 配置
- **场景背景**: #131313 (与项目主题一致)
- **相机**: PerspectiveCamera, FOV 75°, 位置 z=3
- **球体**: SphereGeometry, 半径1, 64x64分段
- **材质**: MeshBasicMaterial + 动态贴图
- **光源**: AmbientLight (0.6) + DirectionalLight (0.8)

### 性能优化
- **抗锯齿**: 启用渲染器抗锯齿
- **像素比**: 自动检测设备像素比
- **资源清理**: 组件卸载时自动清理Three.js资源
- **视频优化**: 隐藏video元素，仅用作贴图源

### 响应式设计
- **窗口大小调整**: 自动更新相机比例和渲染器尺寸
- **全屏显示**: 固定定位，100vw x 100vh
- **移动端兼容**: 支持touch事件和playsinline

## 🎨 视觉效果

### 球体材质
- **初始状态**: 白色材质
- **贴图映射**: 自动UV映射，支持重复包装
- **视频贴图**: VideoTexture，实时播放

### 动画效果
- **平滑旋转**: 使用requestAnimationFrame
- **无缝切换**: 贴图切换无停顿
- **流畅交互**: 鼠标拖拽实时响应

## 🔧 故障排除

### 常见问题
1. **贴图不显示**: 检查文件路径和格式支持
2. **视频不播放**: 确保浏览器支持autoplay和muted
3. **鼠标事件失效**: 检查z-index和pointer-events
4. **性能问题**: 降低球体分段数或关闭抗锯齿

### 浏览器兼容
- **Chrome**: 完全支持
- **Firefox**: 完全支持  
- **Safari**: 支持，可能需要用户手势激活视频
- **Edge**: 完全支持

## 🎯 扩展建议

### 未来可能的增强
- 添加音频可视化效果
- 支持HDR贴图和环境映射
- 添加粒子系统背景
- 支持VR/AR模式
- 添加贴图预加载和过渡动画 