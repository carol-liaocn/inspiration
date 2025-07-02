# UI 设计规格文档

本文档详细记录了设计友好报网页版各页面的UI数值规格，便于检索和修改。

## 📊 全局设计规格

### 颜色系统
```css
/* 主色调 */
--dark-bg: #131313;        /* 深灰背景 */
--light-gray: #E2E2E2;     /* 主文字色/激活状态 */
--medium-gray: #787878;    /* 次级文字色/未激活状态 */
--design-gray: #D9D9D9;    /* 图片占位符 */
--design-yellow: #FFFF00;  /* 黄色高亮/弹窗背景 */

/* 标签颜色系统 */
--design-green: #3FDC11;   /* Branding 标签 */
--design-purple: #7672DC;  /* Generative Art 标签 */
--orange-500: #FB923C;     /* Motion 标签 */
--cyan-500: #06B6D4;       /* Digital 标签 */
--pink-500: #EC4899;       /* Graphic 标签 */
--red-500: #EF4444;        /* AIGC 标签 */
```

### 字体规格
```css
/* 字体家族 */
font-family: 'Inter', sans-serif;

/* 字号系统 */
--text-2xl: 1.5rem (24px);    /* 页面标题/导航按钮 */
--text-lg: 1.125rem (18px);   /* 项目标题 */
--text-sm: 0.875rem (14px);   /* 筛选器/标签文字/链接 */
--text-3xl: 1.875rem (30px);  /* 弹窗主标题 */
--text-2xl: 1.5rem (24px);    /* 弹窗副标题/描述 */

/* 字重系统 */
--font-medium: 500;           /* 常规文字 */
--font-bold: 700;             /* 重要标题 */
```

### 间距系统
```css
/* 页面边距 */
--spacing-page: 2rem (32px);

/* 组件间距 */
--spacing-grid: 1.5rem (24px);     /* 网格项目间距 */
--spacing-nav: 0.375rem (6px);     /* 导航按钮间距 */
--spacing-tag: 0.375rem (6px);     /* 标签间距 */
--spacing-content: 0.625rem (10px); /* 标题到标签间距 */
--spacing-section: 2rem (32px);     /* 区块底部间距 */

/* 圆角系统 */
--radius-lg: 0.75rem (12px);       /* 大圆角 */
--radius-md: 0.375rem (6px);       /* 小圆角 */
```

---

## 🎨 Inspiration 页面规格

### 数据源配置
```css
/* 数据文件 */
数据源: src/data/inspiration_projects.json
媒体类型: 支持图片(.png/.jpg/.gif/.webp)和视频(.mp4)
视频设置: autoPlay, loop, muted
动态渲染: 从JSON数据自动生成项目列表

/* 标签兼容性 */
支持: "Generative Art" 和 "Generatve art" 拼写变体
筛选逻辑: 智能匹配标签文本
```

### 页面布局
```css
/* 整体容器 */
min-height: 100vh;
background: #131313;
display: flex;

/* 左侧导航栏 */
width: 20rem (320px);
position: fixed;
height: 100vh;
background: #131313;

/* 主内容区域 */
margin-left: 20rem (320px);
padding: 2rem (32px);
```

### 筛选器区域
```css
/* 筛选器容器 */
display: flex;
justify-content: flex-end;
gap: 1rem (16px);
margin-bottom: 2rem (32px);

/* 筛选按钮 */
font-size: 0.875rem (14px);
font-weight: 500;
padding: 0.5rem 1rem (8px 16px);
border-radius: 0.375rem (6px);
transition: all 0.2s;

/* 激活状态 */
color: #E2E2E2;
background: rgba(226, 226, 226, 0.1);

/* 未激活状态 */
color: #787878;
background: transparent;
```

### 项目网格
```css
/* 网格容器 */
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1.5rem (24px);

/* 项目卡片 */
background: #131313;
border-radius: 0.75rem (12px);
overflow: hidden;
transition: opacity 0.2s;

/* 悬浮效果 */
hover: opacity: 0.8;
cursor: pointer;
```

### 项目卡片内部
```css
/* 图片容器 */
aspect-ratio: 4/5;
background: #D9D9D9;
border-radius: 0.75rem (12px);
margin-bottom: 1.5rem (24px);

/* 项目标题 */
font-size: 1.125rem (18px);
font-weight: 500;
color: #E2E2E2;
margin-bottom: 0.625rem (10px);

/* 标签容器 */
display: flex;
flex-wrap: wrap;
gap: 0.375rem (6px);
margin-bottom: 2rem (32px);

/* 单个标签 */
font-size: 0.875rem (14px);
font-weight: 500;
padding: 0.125rem 0.5rem (2px 8px);
height: 1.25rem (20px);
border-radius: 0.375rem (6px);
text-transform: capitalize;
```

### 标签颜色对应
```css
.tag-branding { background: #3FDC11; color: #131313; }
.tag-digital { background: #06B6D4; color: #131313; }
.tag-motion { background: #FB923C; color: #131313; }
.tag-graphic { background: #EC4899; color: #131313; }
.tag-typography { background: #FFFF00; color: #131313; }
.tag-generative-art { background: #7672DC; color: #131313; }
.tag-aigc { background: #EF4444; color: #131313; }
```

---

## 🎪 项目详情弹窗规格

### 弹窗容器
```css
/* 背景遮罩 */
position: fixed;
inset: 0;
background: rgba(19, 19, 19, 0.8);
display: flex;
align-items: center;
justify-content: center;
z-index: 50;

/* 弹窗主体 */
background: #FFFF00;
max-width: 86.4rem (1382px); /* 原72rem的120% */
max-height: 80vh; /* 限制最大高度为视口80% */
width: 100%;
margin: 0 4rem (0 64px);
overflow: hidden;
display: flex;
border-radius: 0; /* 无圆角 */
```

### 关闭按钮
```css
/* 按钮位置和尺寸 */
position: fixed;
top: 2rem (32px);
left: 1rem (16px);
width: 2.5rem (40px);
height: 2.5rem (40px);
background: #FFFF00;
z-index: 60;
border-radius: 0; /* 无圆角 */
border: none; /* 无边框 */

/* 图标规格 */
width: 2.25rem (36px);
height: 2.25rem (36px);
stroke: #131313;
stroke-width: 1px;
```

### 左侧图片区域（70%）
```css
/* 容器 */
width: 70%;
background: #FFFF00;
padding-left: 1.2%; /* 精确边距 */
min-height: 0; /* 允许收缩 */

/* 可滚动区域 */
height: 100%;
overflow-y: auto; /* 垂直滚动 */
padding-top: 0; /* 无上边距 */
padding-right: 1rem (16px);
padding-bottom: 1rem (16px);
padding-left: 0; /* 无左边距 */
min-height: 0; /* 允许收缩 */
scrollbar-width: none; /* Firefox隐藏滚动条 */
-ms-overflow-style: none; /* IE/Edge隐藏滚动条 */

/* WebKit浏览器隐藏滚动条 */
::-webkit-scrollbar {
  display: none;
}

/* 图片网格容器 */
display: grid;
grid-template-columns: repeat(2, 1fr); /* 两列布局 */
gap: 1rem (16px);

/* 首图 - 跨两列 */
grid-column: span 2;
aspect-ratio: 3/2;
background: #D9D9D9;
border-radius: 0; /* 无圆角 */

/* 其他图片 - 单列 */
aspect-ratio: 1/1; /* 正方形 */
background: #D9D9D9;
border-radius: 0; /* 无圆角 */
```

### 右侧文字区域（30%）
```css
/* 容器 */
width: 30%;
padding-top: 2rem (32px);
padding-bottom: 2rem (32px);
padding-right: 1.2%; /* 精确边距 */
padding-left: 0; /* 无左边距 */
background: #FFFF00;
color: #131313;
display: flex;
flex-direction: column;
min-height: 0; /* 允许收缩 */
```

### 文字内容规格
```css
/* 标题区域 */
margin-bottom: 1.5rem (24px);

/* 主标题 */
font-size: 1.5rem (24px);
font-weight: 700;
margin-bottom: 0.5rem (8px);
text-transform: uppercase;
line-height: 1.2;

/* 副标题（作者） */
font-size: 1.125rem (18px);
font-weight: 500;
line-height: 1.3;

/* 描述区域 */
flex: 1; /* 占据剩余空间 */
overflow-y: auto; /* 长文本可滚动 */
min-height: 0; /* 允许收缩 */
margin-bottom: 1.5rem (24px);

/* 描述文字 */
font-size: 1.125rem (18px);
font-weight: 500;
line-height: 1.625;
text-align: justify; /* 两端对齐 */
white-space: pre-line;

/* 链接区域 */
position: static; /* 非绝对定位 */
text-align: left;

/* 链接样式 */
font-size: 0.875rem (14px);
font-weight: 500;
color: #131313;
text-decoration: underline;
```

---

## 📊 完整开发总结（2024.12.19）

### 弹窗开发完整历程
1. **基础布局建立**: 7:3比例、黄色背景、直角设计
2. **字体系统优化**: 从60px→30px→24px的主标题调整过程
3. **关闭按钮外置**: fixed定位、40px方块、与页面标题对齐
4. **高度控制优化**: max-height: 80vh防止超出屏幕
5. **网格布局实现**: 左侧两列网格、首图跨列、正方形图片
6. **滚动条隐藏**: 多浏览器兼容的滚动条隐藏方案
7. **间距精细调整**: 去除内部左边距和上边距，图片紧贴边界

### 技术亮点总结
- **多浏览器滚动条隐藏**: Firefox、WebKit、IE/Edge全兼容
- **精确间距控制**: 1.2%容器边距 + 0内部边距的双层间距系统
- **CSS Grid + Flexbox**: 网格图片布局 + 弹性文字布局的混合方案
- **媒体智能渲染**: 图片/视频自动识别 + URL编码处理
- **高度自适应**: 80vh限制 + min-h-0收缩的响应式高度

### 最终UI数据记录
```css
/* 弹窗完整规格 */
.modal-container {
  position: fixed;
  inset: 0;
  background: rgba(19, 19, 19, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.modal-body {
  background: #FFFF00;
  max-width: 86.4rem; /* 1382px - 原72rem的120% */
  max-height: 80vh;
  width: 100%;
  margin: 0 4rem; /* 64px */
  overflow: hidden;
  display: flex;
  border-radius: 0;
}

.close-button {
  position: fixed;
  top: 2rem; /* 32px */
  left: 1rem; /* 16px */
  width: 2.5rem; /* 40px */
  height: 2.5rem; /* 40px */
  background: #FFFF00;
  z-index: 60;
}

.close-icon {
  width: 2.25rem; /* 36px */
  height: 2.25rem; /* 36px */
  stroke: #131313;
  stroke-width: 1px;
}

.left-image-area {
  width: 70%;
  background: #FFFF00;
  padding-left: 1.2%;
  min-height: 0;
}

.scrollable-grid {
  height: 100%;
  overflow-y: auto;
  padding-top: 0;
  padding-right: 1rem; /* 16px */
  padding-bottom: 1rem; /* 16px */
  padding-left: 0;
  min-height: 0;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.scrollable-grid::-webkit-scrollbar {
  display: none; /* WebKit */
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem; /* 16px */
}

.hero-image {
  grid-column: span 2;
  aspect-ratio: 3/2;
  background: #D9D9D9;
  border-radius: 0;
}

.square-image {
  aspect-ratio: 1/1;
  background: #D9D9D9;
  border-radius: 0;
}

.right-text-area {
  width: 30%;
  padding-top: 2rem; /* 32px */
  padding-bottom: 2rem; /* 32px */
  padding-right: 1.2%;
  padding-left: 0;
  background: #FFFF00;
  color: #131313;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.title-section {
  margin-bottom: 1.5rem; /* 24px */
}

.main-title {
  font-size: 1.5rem; /* 24px */
  font-weight: 700;
  margin-bottom: 0.5rem; /* 8px */
  text-transform: uppercase;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.125rem; /* 18px */
  font-weight: 500;
  line-height: 1.3;
}

.description-area {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  margin-bottom: 1.5rem; /* 24px */
}

.description-text {
  font-size: 1.125rem; /* 18px */
  font-weight: 500;
  line-height: 1.625;
  white-space: pre-line;
  text-align: justify;
}

.link-section {
  text-align: left;
}

.project-link {
  font-size: 0.875rem; /* 14px */
  font-weight: 500;
  color: #131313;
  text-decoration: underline;
}
```

---

## 👨‍🎨 Artist 页面规格

### 页面布局
```css
/* 主容器 */
margin-left: 20rem (320px);
min-height: 100vh;
background: #131313;

/* 页面标题区域 */
padding: 2rem (32px);
font-size: 1.5rem (24px);
font-weight: 500;
color: #E2E2E2;
text-transform: uppercase;
```

### 艺术家列表区域
```css
/* 列表容器 */
padding: 0 2rem (0 32px);
gap: 4rem (64px); /* 艺术家之间间距 */

/* 单个艺术家容器 */
margin-bottom: 2rem (32px);
```

### 四栏网格布局
```css
/* 主网格容器 */
display: grid;
grid-template-columns: 1fr 3fr; /* 1:3 比例 */
gap: 1.5rem (24px);

/* 第一栏：艺术家信息 */
.artist-info-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem (24px);
}

/* 第二到四栏：图片网格 */
.artist-works-columns {
  grid-column: span 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem (16px);
}
```

### 页面筛选器区域
```css
/* 筛选器容器 */
display: flex;
justify-content: space-between;
align-items: center;
padding: 2rem (32px);

/* 筛选按钮容器 */
display: flex;
gap: 1rem (16px);
font-size: 0.875rem (14px);
font-weight: 500;

/* 筛选按钮 */
transition: colors 0.2s;
hover: opacity: 0.8;

/* 激活状态 */
color: #E2E2E2;

/* 未激活状态 */
color: #787878;
```

### 艺术家信息栏（第一栏）
```css
/* 第一栏容器 */
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;

/* 姓名和标签组容器 */
display: flex;
flex-direction: column;
gap: 0.25rem (4px); /* 姓名与标签间距4px */

/* 艺术家姓名 */
font-size: 1.5rem (24px);
font-weight: 500;
color: #E2E2E2;
line-height: 1.25;
text-transform: capitalize; /* 首字母大写 */

/* 标签容器 */
display: flex;
flex-wrap: wrap;
gap: 0.375rem (6px); /* 标签横向间距6px */

/* 单个标签 */
font-size: 0.875rem (14px);
font-weight: 500;
padding: 0.125rem 0.5rem (2px 8px);
color: #131313;
border-radius: 0.375rem (6px);
line-height: tight;

/* View All 按钮区域 */
display: flex;
align-items: center;
gap: 0.75rem (12px);
align-self: flex-start; /* 与图片底端对齐 */
position: 与artist name左侧对齐;

/* 圆形图标按钮 */
width: 2.5rem (40px);
height: 2.5rem (40px);
border: 0.2px solid #E2E2E2;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;

/* 图标 */
width: 2rem (32px);
height: 2rem (32px);
stroke: #E2E2E2;
stroke-width: 0.4px;

/* 按钮文字 */
font-size: 0.875rem (14px);
font-weight: 500;
color: #E2E2E2;
```

### 图片展示区域（第二到四栏）
```css
/* 图片网格容器 */
grid-column: span 3;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem (16px);

/* 显示数量 */
每个艺术家显示: 3张图片 (单行);

/* 单个图片容器 */
aspect-ratio: 1/1;
background: #D9D9D9;
overflow: hidden;

/* 图片 */
width: 100%;
height: 100%;
object-fit: cover;
```

### 分隔线
```css
/* 第一条分隔线 */
width: 100%;
height: 0.2px;
background: #E2E2E2;
margin-bottom: 1rem (16px);
position: 与左侧导航栏INSPIRATION文字顶端对齐;
padding: 0 2rem (32px); /* 与页面内容对齐 */

/* 艺术家之间的分隔线 */
width: 100%;
height: 0.2px;
background: #E2E2E2;
margin-bottom: 1rem (16px);
display: 从第二个艺术家开始显示;
```

### Artist页面数据规格
```css
/* 艺术家数量 */
总艺术家数: 25位

/* 页面滚动 */
scroll-behavior: smooth;
overflow-y: auto;

/* 艺术家分布 */
包含所有分类标签的艺术家组合
支持筛选器过滤显示
页面支持垂直滚动浏览所有内容
```

### 标签颜色系统（Artist页面）
```css
.tag-branding { background: #3FDC11; }
.tag-digital { background: #06B6D4; }
.tag-motion { background: #FB923C; }
.tag-graphic { background: #EC4899; }
.tag-typography { background: #FFFF00; }
.tag-generative-art { background: #7672DC; }
.tag-aigc { background: #EF4444; }
```

---

## 🤝 Team Project 页面规格

### 页面布局
```css
/* 主容器 */
margin-left: 20rem (320px);
padding: 2rem (32px);
min-height: 100vh;
background: #131313;

/* 页面标题 */
font-size: 1.5rem (24px);
font-weight: 500;
color: #E2E2E2;
text-transform: uppercase;
```

### 四栏布局结构
```css
/* 项目网格容器 */
display: grid;
grid-template-columns: 1fr 3fr; /* 1:3 比例，信息栏占25%，图片区占75% */
gap: 1.5rem (24px);
margin-bottom: 2rem (32px);
```

### 第一栏：项目信息区域
```css
/* 信息栏容器 */
display: flex;
flex-direction: column;
height: 100%;

/* 信息组容器 */
display: flex;
flex-direction: column;
gap: 0.375rem (6px); /* 元素间距6px，保持一致 */

/* 项目标题 */
font-size: 1.5rem (24px);
font-weight: 500;
color: #E2E2E2;
line-height: 1.25;
text-transform: capitalize; /* 首字母大写 */

/* 项目作者 */
font-size: 1.125rem (18px);
font-weight: 500;
color: #787878;
text-transform: capitalize;

/* 标签容器 */
display: flex;
flex-wrap: wrap;
gap: 0.375rem (6px); /* 标签横向间距6px */

/* 单个标签 */
font-size: 0.875rem (14px);
font-weight: 500;
padding: 0.125rem 0.5rem (2px 8px);
color: #131313;
border-radius: 0.375rem (6px);
line-height: tight;

/* 注意：Team Project页面无View All按钮 */
```

### 第二到四栏：图片展示区域
```css
/* 图片网格容器 */
grid-column: span 3;
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 1rem (16px);

/* 显示数量 */
每个项目显示: 3张图片 (单行);

/* 单个图片容器 - 竖版3:4比例 */
aspect-ratio: 3/4; /* 竖版比例 */
background: #D9D9D9;
overflow: hidden;

/* 图片 */
width: 100%;
height: 100%;
object-fit: cover;
```

### 分隔线
```css
/* 第一条分隔线 */
width: 100%;
height: 0.2px;
background: #E2E2E2;
margin-bottom: 1rem (16px);
padding: 0 2rem (32px);

/* 项目之间的分隔线 */
width: 100%;
height: 0.2px;
background: #E2E2E2;
margin-bottom: 1rem (16px);
display: 从第二个项目开始显示;
```

### Team Project页面数据规格
```css
/* 项目数量 */
总项目数: 10个团队项目

/* 页面滚动 */
scroll-behavior: smooth;
overflow-y: auto;

/* 项目分布 */
包含所有分类标签的项目组合
无筛选器功能
页面支持垂直滚动浏览所有内容

/* 图片比例特点 */
竖版3:4比例，突出纵向视觉效果
无悬浮交互效果，保持静态显示

/* 信息栏特点 */
无View All按钮和箭头图标
项目信息三元素间距统一为6px
简洁的垂直布局设计

/* 项目数据示例 */
项目名称: project name, creative vision, digital future, motion flow, brand identity, type experiment, ai generation, interactive design, visual identity
作者名称: author name, sarah chen, alex rodriguez, maria kowalski, david kim, elena vasquez, james wright, lisa wang, thomas anderson
分类标签: 涵盖Branding, Digital, Motion, Graphic, Typography, Generative art, Aigc等所有类别
```

---

## 🔧 侧边导航栏规格

### 导航容器
```css
/* 侧边栏主体 */
width: 20rem (320px);
height: 100vh;
background: #131313;
position: fixed;
left: 0;
top: 0;
padding: 2rem (32px);
display: flex;
flex-direction: column;

/* Logo/标题区域 */
margin-bottom: 3rem (48px);

/* 网站标题 */
font-size: 1.5rem (24px);
font-weight: 700;
color: #E2E2E2;
```

### 导航按钮
```css
/* 按钮容器 */
display: flex;
flex-direction: column;
gap: 0.375rem (6px);

/* 单个按钮 */
font-size: 1.5rem (24px);
font-weight: 500;
color: #E2E2E2;
padding: 0.75rem 0 (12px 0);
text-align: left;
background: transparent;
border: none;
cursor: pointer;
transition: all 0.2s;

/* 激活状态 */
.active {
  color: #E2E2E2;
  filter: blur(0px);
}

/* 未激活状态 */
.inactive {
  color: #E2E2E2;
  filter: blur(10px);
}

/* 悬浮效果 */
button:hover {
  opacity: 0.8;
}
``` 