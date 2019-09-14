(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{1168:function(n,e){n.exports='Rate 评分\n===\n\n评分组件\n\n```jsx\nimport { Rate } from \'uiw\';\n```\n\n### 基本用法\n\n按钮样式的单选组合。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Rate, Divider, Icon } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Rate value={3} />\n    <Divider />\n    <Rate color="#393E48" character="☆" value={4} />\n    <Divider />\n    <Rate color="#28a745" character={<Icon type="heart-on" />} value={3} />\n    <Divider />\n    <Rate color="#dc3545" character="✿" value={4} />\n  </div>\n)\n\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 只读\n\n按钮样式的单选组合。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Rate, Divider, Icon } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Rate readOnly value={3} />\n    <Divider />\n    <Rate readOnly character="☆" value={4} />\n    <Divider />\n    <Rate readOnly character={<Icon type="heart-on" />} value={3} />\n    <Divider />\n    <Rate readOnly character="✿" value={4} />\n  </div>\n)\n\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 文本\n\n按钮样式的单选组合。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Rate, Divider } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Rate character="美" value={4} />\n    <Divider />\n    <Rate color="#d80000" character="好" value={3} />\n    <Divider />\n    <Rate character="传" value={4} />\n  </div>\n)\n\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 半选显示\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Rate, Divider, Icon } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Rate character={<Icon type="heart-on" />} value={3.3} />\n    <Divider />\n    <Rate color="#d80000" character={<Icon type="heart-on" />} value={4.3} />\n  </div>\n)\n\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### 尺寸\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Rate, Divider, Icon } from \'uiw\';\n\nconst Demo = () => (\n  <div>\n    <Rate style={{ fontSize: 34 }} character={<Icon type="heart-on" />} value={3} />\n  </div>\n)\n\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Rate\n\n| 参数 | 说明 | 类型 | 默认值 |\n|--------- |-------- |--------- |-------- |\n| value | 根据 value 进行比较，判断是否选中 | Number | - |\n| count | star 总数 | Number | `5` |\n| readOnly | 只读，无法进行交互 | Boolean | `false` |\n| character | 自定义字符 | ReactNode | - |\n| color | 自定义 Star 的颜色 | String | - |\n| className | 自定义样式类名 | String | - |\n| onChange | 数值改变时的回调，返回当前值 | Funtcion(e:Even,value) | - |\n| onHoverChange | 鼠标经过时数值变化的回调 | Funtcion(e:Even,value) | - |\n'}}]);