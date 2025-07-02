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
max-width: 72rem (1152px);
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
display: flex;
flex-direction: column;
padding: 1rem (16px);
padding-left: 1.2%; /* 精确边距 */

/* 主图片 */
aspect-ratio: 3/2;
background: #D9D9D9;
margin-bottom: 1rem (16px);
border-radius: 0; /* 无圆角 */

/* 小图片容器 */
display: flex;
gap: 1rem (16px);

/* 单个小图片 */
width: 50%;
aspect-ratio: 1/1;
background: #D9D9D9;
border-radius: 0; /* 无圆角 */
```

### 右侧文字区域（30%）
```css
/* 容器 */
width: 30%;
padding-top: 3rem (48px);
padding-bottom: 3rem (48px);
padding-right: 1.2%; /* 精确边距 */
padding-left: 0; /* 无左边距 */
background: #FFFF00;
color: #131313;
position: relative;
display: flex;
flex-direction: column;
```

### 文字内容规格
```css
/* 标题区域 */
margin-bottom: 2rem (32px);

/* 主标题 */
font-size: 1.875rem (30px);
font-weight: 700;
margin-bottom: 0.5rem (8px);
text-transform: uppercase;
line-height: 1.2;

/* 副标题（作者） */
font-size: 1.5rem (24px);
font-weight: 500;
line-height: 1.3;

/* 描述区域 */
flex: 1; /* 占据剩余空间 */

/* 描述文字 */
font-size: 1.5rem (24px);
font-weight: 500;
line-height: 1.625;
text-align: justify; /* 两端对齐 */
white-space: pre-line;

/* 链接区域 */
position: absolute;
bottom: 3rem (48px);
left: 0;
right: 0;
padding-right: 1.2%; /* 与容器右边距一致 */
text-align: left;

/* 链接样式 */
font-size: 0.875rem (14px);
font-weight: 500;
color: #131313;
text-decoration: underline;
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
margin-bottom: 2rem (32px);
```

### 内容区域
```css
/* 占位文字 */
font-size: 1.125rem (18px);
color: #787878;
text-align: center;
padding: 4rem (64px);
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