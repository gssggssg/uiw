(this.webpackJsonpuiw=this.webpackJsonpuiw||[]).push([[397],{1149:function(n,t,e){"use strict";e.r(t),t.default="Drawer \u62bd\u5c49\n===\n\n\u4e00\u4e2a\u4ece\u9875\u9762\u8fb9\u7f18\u6ed1\u52a8\u51fa\u6765\u7684\u6d6e\u5c42\uff0c\u53ef\u4ee5\u66ff\u4ee3 [`<Modal>`](#/components/modal) \u66f4\u591a\u6837\u7684\u5c55\u793a\u65b9\u5f0f\u3002\n\n```jsx\nimport { Drawer } from 'uiw';\n```\n\n### \u57fa\u7840\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Drawer, ButtonGroup, Button } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false,\n    }\n  }\n  onClick() {\n    this.setState({ visible: !this.state.visible });\n  }\n  onClose() {\n    this.setState({ visible: false });\n  }\n  render() {\n    return (\n      <div>\n        <Drawer\n          title=\"\u62bd\u5c49\u6807\u9898\"\n          isOpen={this.state.visible}\n          onClose={this.onClose.bind(this)}\n        >\n          React \u53ef\u4ee5\u975e\u5e38\u8f7b\u677e\u5730\u521b\u5efa\u7528\u6237\u4ea4\u4e92\u754c\u9762\u3002\u4e3a\u4f60\u5e94\u7528\u7684\u6bcf\u4e00\u4e2a\u72b6\u6001\u8bbe\u8ba1\u7b80\u6d01\u7684\u89c6\u56fe\uff0c\u5728\u6570\u636e\u6539\u53d8\u65f6 React \u4e5f\u53ef\u4ee5\u9ad8\u6548\u5730\u66f4\u65b0\u6e32\u67d3\u754c\u9762\u3002\n          <br /><br />\n          \u4ee5\u58f0\u660e\u5f0f\u7f16\u5199UI\uff0c\u53ef\u4ee5\u8ba9\u4f60\u7684\u4ee3\u7801\u66f4\u52a0\u53ef\u9760\uff0c\u4e14\u65b9\u4fbf\u8c03\u8bd5\u3002\n          <br /><br />\n          \u521b\u5efa\u597d\u62e5\u6709\u5404\u81ea\u72b6\u6001\u7684\u7ec4\u4ef6\uff0c\u518d\u7531\u7ec4\u4ef6\u6784\u6210\u66f4\u52a0\u590d\u6742\u7684\u754c\u9762\u3002\n          <br /><br />\n          \u65e0\u9700\u518d\u7528\u6a21\u7248\u4ee3\u7801\uff0c\u901a\u8fc7\u4f7f\u7528JavaScript\u7f16\u5199\u7684\u7ec4\u4ef6\u4f60\u53ef\u4ee5\u66f4\u597d\u5730\u4f20\u9012\u6570\u636e\uff0c\u5c06\u5e94\u7528\u72b6\u6001\u548cDOM\u62c6\u5206\u5f00\u6765\u3002\n          <br /><br />\n          \u65e0\u8bba\u4f60\u73b0\u5728\u6b63\u5728\u4f7f\u7528\u4ec0\u4e48\u6280\u672f\u6808\uff0c\u4f60\u90fd\u53ef\u4ee5\u968f\u65f6\u5f15\u5165 React \u5f00\u53d1\u65b0\u7279\u6027\u3002\n          <br /><br />\n          <b>\u7ec4\u4ef6</b>\n          <br /><br />\n          React \u7ec4\u4ef6\u4f7f\u7528\u4e00\u4e2a\u540d\u4e3a render() \u7684\u65b9\u6cd5\uff0c \u63a5\u6536\u6570\u636e\u4f5c\u4e3a\u8f93\u5165\uff0c\u8f93\u51fa\u9875\u9762\u4e2d\u5bf9\u5e94\u5c55\u793a\u7684\u5185\u5bb9\u3002 \u4e0b\u9762\u8fd9\u4e2a\u793a\u4f8b\u4e2d\u7c7b\u4f3cXML\u7684\u5199\u6cd5\u88ab\u79f0\u4e3aJSX. \u8f93\u5165\u7684\u6570\u636e\u901a\u8fc7 this.props \u4f20\u5165 render() \u65b9\u6cd5\u3002\n        </Drawer>\n        <ButtonGroup>\n          <Button onClick={this.onClick.bind(this)}>\u6253\u5f00\u62bd\u5c49</Button>\n        </ButtonGroup>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u663e\u793a\u4f4d\u7f6e\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Drawer, ButtonGroup, Button } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false,\n      placement: null,\n    }\n  }\n  onClick(placement) {\n    this.setState({ visible: !this.state.visible, placement });\n  }\n  onClose() {\n    this.setState({ visible: false });\n  }\n  render() {\n    return (\n      <div>\n        <Drawer\n          title=\"\u62bd\u5c49\u6807\u9898\"\n          icon=\"information\"\n          placement={this.state.placement}\n          isOpen={this.state.visible}\n          footer=\"\u9875\u811a\uff0c\u53ef\u4ee5\u653e\u70b9\u5185\u5bb9\"\n          onClose={this.onClose.bind(this)}\n        >\n          React \u53ef\u4ee5\u975e\u5e38\u8f7b\u677e\u5730\u521b\u5efa\u7528\u6237\u4ea4\u4e92\u754c\u9762\u3002\u4e3a\u4f60\u5e94\u7528\u7684\u6bcf\u4e00\u4e2a\u72b6\u6001\u8bbe\u8ba1\u7b80\u6d01\u7684\u89c6\u56fe\uff0c\u5728\u6570\u636e\u6539\u53d8\u65f6 React \u4e5f\u53ef\u4ee5\u9ad8\u6548\u5730\u66f4\u65b0\u6e32\u67d3\u754c\u9762\u3002\n          <br /><br />\n          \u4ee5\u58f0\u660e\u5f0f\u7f16\u5199UI\uff0c\u53ef\u4ee5\u8ba9\u4f60\u7684\u4ee3\u7801\u66f4\u52a0\u53ef\u9760\uff0c\u4e14\u65b9\u4fbf\u8c03\u8bd5\u3002\n          <br /><br />\n          \u521b\u5efa\u597d\u62e5\u6709\u5404\u81ea\u72b6\u6001\u7684\u7ec4\u4ef6\uff0c\u518d\u7531\u7ec4\u4ef6\u6784\u6210\u66f4\u52a0\u590d\u6742\u7684\u754c\u9762\u3002\n          <br /><br />\n          \u65e0\u9700\u518d\u7528\u6a21\u7248\u4ee3\u7801\uff0c\u901a\u8fc7\u4f7f\u7528JavaScript\u7f16\u5199\u7684\u7ec4\u4ef6\u4f60\u53ef\u4ee5\u66f4\u597d\u5730\u4f20\u9012\u6570\u636e\uff0c\u5c06\u5e94\u7528\u72b6\u6001\u548cDOM\u62c6\u5206\u5f00\u6765\u3002\n          <br /><br />\n          \u65e0\u8bba\u4f60\u73b0\u5728\u6b63\u5728\u4f7f\u7528\u4ec0\u4e48\u6280\u672f\u6808\uff0c\u4f60\u90fd\u53ef\u4ee5\u968f\u65f6\u5f15\u5165 React \u5f00\u53d1\u65b0\u7279\u6027\u3002\n          <br /><br />\n          <b>\u7ec4\u4ef6</b>'top', 'right', 'bottom', 'left'\n        </Drawer>\n        <ButtonGroup>\n          <Button onClick={this.onClick.bind(this, 'left')}>Left</Button>\n          <Button onClick={this.onClick.bind(this, 'top')}>Top</Button>\n          <Button onClick={this.onClick.bind(this, 'bottom')}>Bottom</Button>\n          <Button onClick={this.onClick.bind(this, 'right')}>Right</Button>\n        </ButtonGroup>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### \u6dfb\u52a0\u9875\u811a\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Drawer, ButtonGroup, Button } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor() {\n    super();\n    this.state = {\n      visible: false,\n    }\n  }\n  onClick() {\n    this.setState({ visible: !this.state.visible });\n  }\n  onClose() {\n    this.setState({ visible: false });\n  }\n  render() {\n    return (\n      <div>\n        <Drawer\n          title=\"\u62bd\u5c49\u6807\u9898\"\n          isOpen={this.state.visible}\n          onClose={this.onClose.bind(this)}\n          footer={\n            <div>\n              <Button size=\"small\" type=\"danger\" onClick={this.onClick.bind(this)}>\u5173\u95ed\u62bd\u5c49</Button>\n              <Button size=\"small\" type=\"success\">\u5176\u5b83</Button>\n            </div>\n          }\n        >\n          React \u53ef\u4ee5\u975e\u5e38\u8f7b\u677e\u5730\u521b\u5efa\u7528\u6237\u4ea4\u4e92\u754c\u9762\u3002\u4e3a\u4f60\u5e94\u7528\u7684\u6bcf\u4e00\u4e2a\u72b6\u6001\u8bbe\u8ba1\u7b80\u6d01\u7684\u89c6\u56fe\uff0c\u5728\u6570\u636e\u6539\u53d8\u65f6 React \u4e5f\u53ef\u4ee5\u9ad8\u6548\u5730\u66f4\u65b0\u6e32\u67d3\u754c\u9762\u3002\n          <br /><br />\n          \u4ee5\u58f0\u660e\u5f0f\u7f16\u5199UI\uff0c\u53ef\u4ee5\u8ba9\u4f60\u7684\u4ee3\u7801\u66f4\u52a0\u53ef\u9760\uff0c\u4e14\u65b9\u4fbf\u8c03\u8bd5\u3002\n          <br /><br />\n          \u521b\u5efa\u597d\u62e5\u6709\u5404\u81ea\u72b6\u6001\u7684\u7ec4\u4ef6\uff0c\u518d\u7531\u7ec4\u4ef6\u6784\u6210\u66f4\u52a0\u590d\u6742\u7684\u754c\u9762\u3002\n          <br /><br />\n          \u65e0\u9700\u518d\u7528\u6a21\u7248\u4ee3\u7801\uff0c\u901a\u8fc7\u4f7f\u7528JavaScript\u7f16\u5199\u7684\u7ec4\u4ef6\u4f60\u53ef\u4ee5\u66f4\u597d\u5730\u4f20\u9012\u6570\u636e\uff0c\u5c06\u5e94\u7528\u72b6\u6001\u548cDOM\u62c6\u5206\u5f00\u6765\u3002\n          <br /><br />\n          \u65e0\u8bba\u4f60\u73b0\u5728\u6b63\u5728\u4f7f\u7528\u4ec0\u4e48\u6280\u672f\u6808\uff0c\u4f60\u90fd\u53ef\u4ee5\u968f\u65f6\u5f15\u5165 React \u5f00\u53d1\u65b0\u7279\u6027\u3002\n          <br /><br />\n          <b>\u7ec4\u4ef6</b>\n          <br /><br />\n          React \u7ec4\u4ef6\u4f7f\u7528\u4e00\u4e2a\u540d\u4e3a render() \u7684\u65b9\u6cd5\uff0c \u63a5\u6536\u6570\u636e\u4f5c\u4e3a\u8f93\u5165\uff0c\u8f93\u51fa\u9875\u9762\u4e2d\u5bf9\u5e94\u5c55\u793a\u7684\u5185\u5bb9\u3002 \u4e0b\u9762\u8fd9\u4e2a\u793a\u4f8b\u4e2d\u7c7b\u4f3cXML\u7684\u5199\u6cd5\u88ab\u79f0\u4e3aJSX. \u8f93\u5165\u7684\u6570\u636e\u901a\u8fc7 this.props \u4f20\u5165 render() \u65b9\u6cd5\u3002\n        </Drawer>\n        <ButtonGroup>\n          <Button onClick={this.onClick.bind(this)}>\u6253\u5f00\u62bd\u5c49</Button>\n        </ButtonGroup>\n      </div>\n    )\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| title | \u62bd\u5c49\u6807\u9898 | String | - |\n| icon | \u8bbe\u7f6e\u5bf9\u8bdd\u6846\u53f3\u4e0a\u89d2\u56fe\u6807 | String/Element | - |\n| isOpen | \u662f\u5426\u53ef\u89c1 | Boollean | - |\n| closable | \u662f\u5426\u663e\u793a\u53f3\u4e0a\u89d2\u7684\u5173\u95ed\u6309\u94ae | Boollean | `true` |\n| placement | \u62bd\u5c49\u7684\u65b9\u5411 | Enum{`top`, `right`, `bottom`, `left`} | `right` |\n| size | \u9ad8\u5ea6/\u5bbd\u5ea6\uff0c\u5728 `placement` \u4e3a `top` \u6216 `bottom` \u65f6\u4f7f\u7528\u4e3a\u8bbe\u7f6e\u9ad8\u5ea6\uff0c\u5426\u5219\u8bbe\u7f6e\u5bbd\u5ea6 | Number | - |\n| bodyProps | \u62bd\u5c49\u586b\u5145\u5185\u5bb9\u7684\u53c2\u6570\u6837\u5f0f\u5bf9\u8c61\uff0c\u4f8b\u5982`className`,`style`\u7b49 | Object | - |\n\n\n\u66f4\u591a\u5c5e\u6027\u6587\u6863\u8bf7\u53c2\u8003 [Overlay](#/components/overlay)\u3002\n"}}]);