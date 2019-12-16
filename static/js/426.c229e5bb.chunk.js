(this.webpackJsonpuiw=this.webpackJsonpuiw||[]).push([[426],{1158:function(n,e,t){"use strict";t.r(e),e.default="Table \u8868\u683c\n===\n\n\u8868\u793a\u4e24\u79cd\u76f8\u4e92\u5bf9\u7acb\u7684\u72b6\u6001\u95f4\u7684\u5207\u6362\uff0c\u591a\u7528\u4e8e\u89e6\u53d1\u300c\u5f00/\u5173\u300d\u3002\u9009\u4e2d\u65f6\u7684\u5185\u5bb9\u652f\u6301\u54cd\u5e94\u5f0f\u3002\n\n```jsx\nimport { Table } from 'uiw';\n```\n\n### \u57fa\u672c\u4f7f\u7528\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e\n```js\nimport { Table, Button } from 'uiw';\n\nconst columns = [\n  {\n    // title: '\u59d3\u540d',\n    title: ({ key }) => {\n      return (\n        <span>\u5b57\u6bb5: {key}</span>\n      )\n    },\n    key: 'name', \n  }, {\n    title: '\u5e74\u9f84',\n    style: { color: 'red' },\n    key: 'age',\n  }, {\n    title: '\u5730\u5740',\n    key: 'info',\n  }, {\n    title: '\u64cd\u4f5c',\n    key: 'edit',\n    width: 98,\n    render: (text, key, rowData, rowNumber, columnNumber) => (\n      <div>\n        <Button size=\"small\" type=\"danger\">\u5220\u9664</Button>\n        <Button size=\"small\" type=\"success\">\u4fee\u6539</Button>\n      </div>\n    ),\n  },\n];\nconst dataSource = [\n  { name: '\u9093\u7d2b\u68cb', age: '12', info: '\u53c8\u540dG.E.M.\uff0c\u539f\u540d\u9093\u8bd7\u9896\uff0c1991\u5e748\u670816\u65e5\u751f\u4e8e\u4e2d\u56fd\u4e0a\u6d77\uff0c\u4e2d\u56fd\u9999\u6e2f\u521b\u4f5c\u578b\u5973\u6b4c\u624b\u3002', edit: '' },\n  { name: '\u674e\u6613\u5cf0', age: '32', info: '1987\u5e745\u67084\u65e5\u51fa\u751f\u4e8e\u56db\u5ddd\u6210\u90fd\uff0c\u4e2d\u56fd\u5185\u5730\u7537\u6f14\u5458\u3001\u6d41\u884c\u4e50\u6b4c\u624b\u3001\u5f71\u89c6\u5236\u7247\u4eba', edit: '' },\n  { name: '\u8303\u51b0\u51b0', age: '23', info: '1981\u5e749\u670816\u65e5\u51fa\u751f\u4e8e\u5c71\u4e1c\u9752\u5c9b\uff0c\u4e2d\u56fd\u5f71\u89c6\u5973\u6f14\u5458\u3001\u5236\u7247\u4eba\u3001\u6d41\u884c\u4e50\u5973\u6b4c\u624b', edit: '' },\n  { name: '\u6768\u5e42', age: '34', info: '1986\u5e749\u670812\u65e5\u51fa\u751f\u4e8e\u5317\u4eac\u5e02\uff0c\u4e2d\u56fd\u5185\u5730\u5f71\u89c6\u5973\u6f14\u5458\u3001\u6d41\u884c\u4e50\u6b4c\u624b\u3001\u5f71\u89c6\u5236\u7247\u4eba\u3002', edit: '' },\n  { name: 'Angelababy', age: '54', info: '1989\u5e742\u670828\u65e5\u51fa\u751f\u4e8e\u4e0a\u6d77\u5e02\uff0c\u534e\u8bed\u5f71\u89c6\u5973\u6f14\u5458\u3001\u65f6\u5c1a\u6a21\u7279\u3002', edit: '' },\n  { name: '\u5510\u5ae3', age: '12', info: '1983\u5e7412\u67086\u65e5\u51fa\u751f\u4e8e\u4e0a\u6d77\u5e02\uff0c\u6bd5\u4e1a\u4e8e\u4e2d\u592e\u620f\u5267\u5b66\u9662\u8868\u6f14\u7cfb\u672c\u79d1\u73ed', edit: '' },\n  { name: '\u5434\u4ea6\u51e1', age: '4', info: '1990\u5e7411\u670806\u65e5\u51fa\u751f\u4e8e\u5e7f\u4e1c\u7701\u5e7f\u5dde\u5e02\uff0c\u534e\u8bed\u5f71\u89c6\u7537\u6f14\u5458\u3001\u6d41\u884c\u4e50\u6b4c\u624b\u3002', edit: '' },\n];\nconst Demo = () => (\n  <div>\n    <Table columns={columns} data={dataSource} />\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u8868\u5934\u5206\u7ec4\n\n\u8868\u5934\u5206\u7ec4\u901a\u8fc7 `columns` \u6570\u7ec4\u4e2d\u5bf9\u8c61\u7684 `children` \u6765\u5b9e\u73b0\uff0c\u4ee5\u6e32\u67d3\u5206\u7ec4\u8868\u5934\u3002\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e\n```js\nimport { Table, Button } from 'uiw';\n\nconst columns = [\n  {\n    title: '\u59d3\u540d',\n    style: { color: 'red' },\n    key: 'name', \n    children: [\n      {\n        title: '\u4e2d\u6587\u540d\u5b57',\n        key: 'cnname',\n        children:[\n          {\n            title: '\u59d3\u540d',\n            style: { color: 'red' },\n            key: 'firstname',\n            children:[\n              { title: '\u59d3', key: 'name1', width: 80 },\n              { title: '\u540d', key: 'name2', width: 80 },\n            ]\n          }, {\n            title: '\u62fc\u97f3',\n            key: 'lastname',\n            children:[\n              { title: '\u59d3', key: 'pinyin1', width: 80 },\n              { title: '\u540d', key: 'pinyin2', width: 80 },\n            ],\n          },\n        ],\n      }, {\n        title: '\u82f1\u6587\u540d\u5b57',\n        width: 100,\n        key: 'name_en',\n      },\n    ]\n  }, {\n    title: '\u5176\u5b83',\n    children:[\n      { title: '\u751f\u65e5', key: 'birthday', width: 150 },\n      { title: '\u804c\u4e1a', key: 'job', width: 150 },\n    ],\n  }, {\n    title: '\u64cd\u4f5c',\n    key: 'edit',\n    width: 150,\n    render: (text, key, rowData, rowNumber, columnNumber) => (\n      <div>\n        <Button size=\"small\" type=\"danger\">\u5220\u9664</Button>\n        <span>{text} {key} - {rowNumber} - {columnNumber}</span>\n      </div>\n    ),\n  },\n];\nconst dataSource = [\n  { name1: '\u9093', name2:'\u7d2b\u68cb', pinyin1: 'deng', pinyin2: 'ziqi', name_en: 'G.E.M.', birthday: '1991\u5e748\u670816\u65e5', job: '\u5531\u4f5c\u6b4c\u624b\u3001\u4f5c\u66f2\u4eba', edit:'' },\n  { name1: '\u5468', name2:'\u6770\u4f26', pinyin1: 'zhou', pinyin2: 'jielun', name_en: 'Jay Chou', birthday: '1979\u5e741\u670818\u65e5', job: '\u6b4c\u624b\u3001\u97f3\u4e50\u4eba', edit:'' },\n  { name1: '\u9093', name2:'\u7d2b\u68cb', pinyin1: 'deng', pinyin2: 'ziqi', name_en: 'G.E.M.', birthday: '1991\u5e748\u670816\u65e5', job: '\u5531\u4f5c\u6b4c\u624b\u3001\u4f5c\u66f2\u4eba', edit:'' },\n  { name1: '\u5468', name2:'\u6770\u4f26', pinyin1: 'zhou', pinyin2: 'jielun', name_en: 'Jay Chou', birthday: '1979\u5e741\u670818\u65e5', job: '\u6b4c\u624b\u3001\u97f3\u4e50\u4eba', edit:'' },\n];\nconst Demo = () => (\n  <div>\n    <Table bordered columns={columns} data={dataSource} />\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u8868\u683c\u884c/\u5217\u5408\u5e76\n\n\u8868\u5934\u53ea\u652f\u6301\u5217\u5408\u5e76\uff0c\u4f7f\u7528 `columns` \u91cc\u7684 `colSpan` \u8fdb\u884c\u8bbe\u7f6e\u3002\u8868\u683c\u652f\u6301\u884c/\u5217\u5408\u5e76\uff0c\u4f7f\u7528 `render` \u91cc\u7684\u5355\u5143\u683c\u5c5e\u6027 `colSpan` \u6216\u8005 `rowSpan` \u8bbe\u503c\u4e3a 0 \u65f6\uff0c\u8bbe\u7f6e\u7684\u8868\u683c\u4e0d\u4f1a\u6e32\u67d3\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Table, Button } from 'uiw';\n\nconst columns = [\n  {\n    title: '\u59d3\u540d',\n    key: 'name', \n  }, {\n    title: '\u5e74\u9f84',\n    style: { color: 'red' },\n    key: 'age',\n    colSpan: 2,\n    render: (text, key, rowData, rowNum, colNum) => {\n      const obj = {\n        children: text,\n        props: {}\n      }\n      if (rowNum === 0) {\n        obj.props.rowSpan = 2;\n      }\n      if (rowNum === 1) {\n        obj.props.rowSpan = 0;\n      }\n      return obj;\n    }\n  }, {\n    title: '\u5730\u5740',\n    key: 'info',\n    colSpan: 0,\n  }, {\n    title: '\u64cd\u4f5c',\n    key: 'edit',\n    width: 98,\n    render: (text, key, rowData, rowNumber, columnNumber) => (\n      <div>\n        <Button size=\"small\" type=\"danger\">\u5220\u9664</Button>\n        <Button size=\"small\" type=\"success\">\u4fee\u6539</Button>\n      </div>\n    ),\n  },\n];\nconst dataSource = [\n  { name: '\u9093\u7d2b\u68cb', age: '12', info: '\u53c8\u540dG.E.M.\uff0c\u539f\u540d\u9093\u8bd7\u9896\uff0c1991\u5e748\u670816\u65e5\u751f\u4e8e\u4e2d\u56fd\u4e0a\u6d77\uff0c\u4e2d\u56fd\u9999\u6e2f\u521b\u4f5c\u578b\u5973\u6b4c\u624b\u3002', edit: '' },\n  { name: '\u674e\u6613\u5cf0', age: '12', info: '1987\u5e745\u67084\u65e5\u51fa\u751f\u4e8e\u56db\u5ddd\u6210\u90fd\uff0c\u4e2d\u56fd\u5185\u5730\u7537\u6f14\u5458\u3001\u6d41\u884c\u4e50\u6b4c\u624b\u3001\u5f71\u89c6\u5236\u7247\u4eba', edit: '' },\n  { name: '\u8303\u51b0\u51b0', age: '23', info: '1981\u5e749\u670816\u65e5\u51fa\u751f\u4e8e\u5c71\u4e1c\u9752\u5c9b\uff0c\u4e2d\u56fd\u5f71\u89c6\u5973\u6f14\u5458\u3001\u5236\u7247\u4eba\u3001\u6d41\u884c\u4e50\u5973\u6b4c\u624b', edit: '' },\n  { name: '\u6768\u5e42', age: '34', info: '1986\u5e749\u670812\u65e5\u51fa\u751f\u4e8e\u5317\u4eac\u5e02\uff0c\u4e2d\u56fd\u5185\u5730\u5f71\u89c6\u5973\u6f14\u5458\u3001\u6d41\u884c\u4e50\u6b4c\u624b\u3001\u5f71\u89c6\u5236\u7247\u4eba\u3002', edit: '' },\n];\nconst Demo = () => (\n  <div>\n    <Table bordered columns={columns} data={dataSource} />\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n\n### \u6807\u9898\u9875\u811a\n\n\u6dfb\u52a0\u8868\u683c\u8fb9\u6846\u7ebf\uff0c\u9875\u5934\u548c\u9875\u811a\u7684\u5c55\u73b0\u6548\u679c\u3002\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e\n```js\nimport { Table, Button } from 'uiw';\n\nconst columns = [\n  {\n    title: '\u59d3\u540d',\n    style: { color: 'red' },\n    key: 'name', \n  }, {\n    title: '\u5e74\u9f84',\n    key: 'age',\n  }, {\n    title: '\u5730\u5740',\n    key: 'info',\n  }, {\n    title: '\u64cd\u4f5c',\n    key: 'edit',\n    width: 98,\n    render: (text, key, rowData, rowNumber, columnNumber) => (\n      <div>\n        <Button size=\"small\" type=\"danger\">\u5220\u9664</Button>\n        <Button size=\"small\" type=\"success\">\u4fee\u6539</Button>\n      </div>\n    ),\n  },\n];\nconst dataSource = [\n  { name: '\u9093\u7d2b\u68cb', age: '12', info: '\u53c8\u540dG.E.M.\uff0c\u539f\u540d\u9093\u8bd7\u9896\uff0c1991\u5e748\u670816\u65e5\u751f\u4e8e\u4e2d\u56fd\u4e0a\u6d77\uff0c\u4e2d\u56fd\u9999\u6e2f\u521b\u4f5c\u578b\u5973\u6b4c\u624b\u3002', edit: '' },\n  { name: '\u674e\u6613\u5cf0', age: '32', info: '1987\u5e745\u67084\u65e5\u51fa\u751f\u4e8e\u56db\u5ddd\u6210\u90fd\uff0c\u4e2d\u56fd\u5185\u5730\u7537\u6f14\u5458\u3001\u6d41\u884c\u4e50\u6b4c\u624b\u3001\u5f71\u89c6\u5236\u7247\u4eba', edit: '' },\n  { name: '\u8303\u51b0\u51b0', age: '23', info: '1981\u5e749\u670816\u65e5\u51fa\u751f\u4e8e\u5c71\u4e1c\u9752\u5c9b\uff0c\u4e2d\u56fd\u5f71\u89c6\u5973\u6f14\u5458\u3001\u5236\u7247\u4eba\u3001\u6d41\u884c\u4e50\u5973\u6b4c\u624b', edit: '' },\n  { name: '\u6768\u5e42', age: '34', info: '1986\u5e749\u670812\u65e5\u51fa\u751f\u4e8e\u5317\u4eac\u5e02\uff0c\u4e2d\u56fd\u5185\u5730\u5f71\u89c6\u5973\u6f14\u5458\u3001\u6d41\u884c\u4e50\u6b4c\u624b\u3001\u5f71\u89c6\u5236\u7247\u4eba\u3002', edit: '' },\n  { name: 'Angelababy', age: '54', info: '1989\u5e742\u670828\u65e5\u51fa\u751f\u4e8e\u4e0a\u6d77\u5e02\uff0c\u534e\u8bed\u5f71\u89c6\u5973\u6f14\u5458\u3001\u65f6\u5c1a\u6a21\u7279\u3002', edit: '' },\n  { name: '\u5510\u5ae3', age: '12', info: '1983\u5e7412\u67086\u65e5\u51fa\u751f\u4e8e\u4e0a\u6d77\u5e02\uff0c\u6bd5\u4e1a\u4e8e\u4e2d\u592e\u620f\u5267\u5b66\u9662\u8868\u6f14\u7cfb\u672c\u79d1\u73ed', edit: '' },\n  { name: '\u5434\u4ea6\u51e1', age: '4', info: '1990\u5e7411\u670806\u65e5\u51fa\u751f\u4e8e\u5e7f\u4e1c\u7701\u5e7f\u5dde\u5e02\uff0c\u534e\u8bed\u5f71\u89c6\u7537\u6f14\u5458\u3001\u6d41\u884c\u4e50\u6b4c\u624b\u3002', edit: '' },\n];\nconst Demo = () => (\n  <div>\n    <Table\n      title={(\n        <div>\n          \u8fd9\u91cc\u662f\u6807\u9898\uff0c\u6709\u8fb9\u6846\uff0c<b>bordered=true</b>\n        </div>\n      )}\n      footer={(\n        <div>\n          \u8fd9\u91cc\u662f\u9875\u811a Footer\uff0c\u6709\u8fb9\u6846\uff0c<b>bordered=true</b>\n        </div>\n      )}\n      bordered columns={columns} data={dataSource} />\n    <Table title=\"\u8fd9\u91cc\u662f\u6807\u9898\uff0c\u6ca1\u6709\u8fb9\u6846\" footer=\"\u8fd9\u91cc\u662f\u9875\u811a Footer\uff0c\u6ca1\u6709\u8fb9\u6846\" columns={columns} data={dataSource} />\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u70b9\u51fb\u5355\u5143\u683c\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e\n```js\nimport { Table, Button, Notify } from 'uiw';\n\nconst columns = [\n  {\n    title: '\u59d3\u540d',\n    style: { color: 'red' },\n    key: 'name', \n  }, {\n    title: '\u5e74\u9f84',\n    key: 'age',\n  }, {\n    title: '\u5730\u5740',\n    key: 'info',\n  }, {\n    title: '\u64cd\u4f5c',\n    key: 'edit',\n    width: 98,\n    render: (text, key, rowData, rowNumber, columnNumber) => (\n      <div>\n        <Button size=\"small\" type=\"danger\">\u5220\u9664</Button>\n        <Button size=\"small\" type=\"success\">\u4fee\u6539</Button>\n      </div>\n    ),\n  },\n];\nconst dataSource = [\n  { name: '\u9093\u7d2b\u68cb', age: '12', info: '\u53c8\u540dG.E.M.\uff0c\u539f\u540d\u9093\u8bd7\u9896\uff0c1991\u5e748\u670816\u65e5\u751f\u4e8e\u4e2d\u56fd\u4e0a\u6d77\uff0c\u4e2d\u56fd\u9999\u6e2f\u521b\u4f5c\u578b\u5973\u6b4c\u624b\u3002', edit: '' },\n  { name: '\u674e\u6613\u5cf0', age: '32', info: '1987\u5e745\u67084\u65e5\u51fa\u751f\u4e8e\u56db\u5ddd\u6210\u90fd\uff0c\u4e2d\u56fd\u5185\u5730\u7537\u6f14\u5458\u3001\u6d41\u884c\u4e50\u6b4c\u624b\u3001\u5f71\u89c6\u5236\u7247\u4eba', edit: '' },\n  { name: '\u8303\u51b0\u51b0', age: '23', info: '1981\u5e749\u670816\u65e5\u51fa\u751f\u4e8e\u5c71\u4e1c\u9752\u5c9b\uff0c\u4e2d\u56fd\u5f71\u89c6\u5973\u6f14\u5458\u3001\u5236\u7247\u4eba\u3001\u6d41\u884c\u4e50\u5973\u6b4c\u624b', edit: '' },\n  { name: '\u6768\u5e42', age: '34', info: '1986\u5e749\u670812\u65e5\u51fa\u751f\u4e8e\u5317\u4eac\u5e02\uff0c\u4e2d\u56fd\u5185\u5730\u5f71\u89c6\u5973\u6f14\u5458\u3001\u6d41\u884c\u4e50\u6b4c\u624b\u3001\u5f71\u89c6\u5236\u7247\u4eba\u3002', edit: '' },\n  { name: 'Angelababy', age: '54', info: '1989\u5e742\u670828\u65e5\u51fa\u751f\u4e8e\u4e0a\u6d77\u5e02\uff0c\u534e\u8bed\u5f71\u89c6\u5973\u6f14\u5458\u3001\u65f6\u5c1a\u6a21\u7279\u3002', edit: '' },\n  { name: '\u5510\u5ae3', age: '12', info: '1983\u5e7412\u67086\u65e5\u51fa\u751f\u4e8e\u4e0a\u6d77\u5e02\uff0c\u6bd5\u4e1a\u4e8e\u4e2d\u592e\u620f\u5267\u5b66\u9662\u8868\u6f14\u7cfb\u672c\u79d1\u73ed', edit: '' },\n  { name: '\u5434\u4ea6\u51e1', age: '4', info: '1990\u5e7411\u670806\u65e5\u51fa\u751f\u4e8e\u5e7f\u4e1c\u7701\u5e7f\u5dde\u5e02\uff0c\u534e\u8bed\u5f71\u89c6\u7537\u6f14\u5458\u3001\u6d41\u884c\u4e50\u6b4c\u624b\u3002', edit: '' },\n];\nconst Demo = () => (\n  <div>\n    <Table\n      title=\"\u8868\u5185\u5bb9 tbody \u5355\u5143\u683c\u70b9\u51fb\u56de\u8c03\u4e8b\u4ef6\"\n      onCell={(rowData, { rowNumber, columnNumber }) => {\n        console.log('--\x3e3', rowData);\n        console.log('--\x3e4', rowNumber);\n        console.log('--\x3e5', columnNumber);\n        Notify.info({ description: `\u4f60\u70b9\u51fb\u4e86\"${rowData.name}\"\u3002` });\n      }}\n      columns={columns}\n      data={dataSource} />\n    <Table\n      title=\"\u8868\u5934\u5355\u5143\u683c\u70b9\u51fb\u56de\u8c03\u4e8b\u4ef6\"\n      onCellHead={(rowData, rowNumber, columnNumber) => {\n        console.log('--\x3e3', rowData);\n        console.log('--\x3e4', rowNumber);\n        console.log('--\x3e5', columnNumber);\n        Notify.info({ description: `\u4f60\u70b9\u51fb\u4e86\"${rowData.title}\"\u3002` });\n      }}\n      onCell={(rowData, { rowNumber, columnNumber }) => {\n        console.log('--\x3e3', rowData);\n        console.log('--\x3e4', rowNumber);\n        console.log('--\x3e5', columnNumber);\n        Notify.info({ description: `\u4f60\u70b9\u51fb\u4e86\"${rowData.name}\"\u3002` });\n      }}\n      columns={columns}\n      data={dataSource} />\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u539f\u59cbHTML\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e\n```js\nimport { Table, Button } from 'uiw';\n\nconst Demo = () => (\n  <div>\n    <Table bordered>\n      <thead>\n        <tr>\n          <th>\u540d\u79f0</th>\n          <th width=\"60\">\u6570\u91cf</th>\n          <th>\u8be6\u60c5</th>\n          <th width=\"100\">\u4ef7\u683c</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>\u571f\u8c46</td>\n          <td>18</td>\n          <td>2009/01/12</td>\n          <td>\uffe586,000</td>\n        </tr>\n        <tr>\n          <td>\u841d\u535c</td>\n          <td>18</td>\n          <td>2009/01/12</td>\n          <td>\uffe586,000</td>\n        </tr>\n        <tr>\n          <td>\u9999\u8549</td>\n          <td>18</td>\n          <td>2009/01/12</td>\n          <td>\uffe586,000</td>\n        </tr>\n        <tr>\n          <td>\u829d\u9ebb</td>\n          <td>18</td>\n          <td>2009/01/12</td>\n          <td>\uffe586,000</td>\n        </tr>\n      </tbody>\n    </Table>\n    <Table>\n      <caption>\u6ca1\u6709\u8fb9\u6846</caption>\n      <thead>\n        <tr>\n          <th>\u540d\u79f0</th>\n          <th width=\"60\">\u6570\u91cf</th>\n          <th>\u8be6\u60c5</th>\n          <th width=\"100\">\u4ef7\u683c</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>\u571f\u8c46</td>\n          <td>18</td>\n          <td>2009/01/12</td>\n          <td>\uffe586,000</td>\n        </tr>\n        <tr>\n          <td>\u841d\u535c</td>\n          <td>18</td>\n          <td>2009/01/12</td>\n          <td>\uffe586,000</td>\n        </tr>\n        <tr>\n          <td>\u9999\u8549</td>\n          <td>18</td>\n          <td>2009/01/12</td>\n          <td>\uffe586,000</td>\n        </tr>\n        <tr>\n          <td>\u829d\u9ebb</td>\n          <td>18</td>\n          <td>2009/01/12</td>\n          <td>\uffe586,000</td>\n        </tr>\n      </tbody>\n    </Table>\n  </div>\n);\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### \u9009\u62e9\u548c\u64cd\u4f5c\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e\n```js\nimport { Table, Button, Checkbox, Pagination, Loader } from 'uiw';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      // \u9009\u4e2d\u7684 key\n      checked: [],\n      loading: false,\n      dataSource: [\n        { name: '\u9093\u7d2b\u68cb', age: '12', info: '\u53c8\u540dG.E.M.\uff0c\u539f\u540d\u9093\u8bd7\u9896\uff0c1991\u5e748\u670816\u65e5\u751f\u4e8e\u4e2d\u56fd\u4e0a\u6d77\uff0c\u4e2d\u56fd\u9999\u6e2f\u521b\u4f5c\u578b\u5973\u6b4c\u624b\u3002' },\n        { name: '\u674e\u6613\u5cf0', age: '32', info: '1987\u5e745\u67084\u65e5\u51fa\u751f\u4e8e\u56db\u5ddd\u6210\u90fd\uff0c\u4e2d\u56fd\u5185\u5730\u7537\u6f14\u5458\u3001\u6d41\u884c\u4e50\u6b4c\u624b\u3001\u5f71\u89c6\u5236\u7247\u4eba' },\n        { name: '\u8303\u51b0\u51b0', age: '23', info: '1981\u5e749\u670816\u65e5\u51fa\u751f\u4e8e\u5c71\u4e1c\u9752\u5c9b\uff0c\u4e2d\u56fd\u5f71\u89c6\u5973\u6f14\u5458\u3001\u5236\u7247\u4eba\u3001\u6d41\u884c\u4e50\u5973\u6b4c\u624b' },\n        { name: '\u6768\u5e42', age: '34', info: '1986\u5e749\u670812\u65e5\u51fa\u751f\u4e8e\u5317\u4eac\u5e02\uff0c\u4e2d\u56fd\u5185\u5730\u5f71\u89c6\u5973\u6f14\u5458\u3001\u6d41\u884c\u4e50\u6b4c\u624b\u3001\u5f71\u89c6\u5236\u7247\u4eba\u3002' },\n        { name: 'Angelababy', age: '54', info: '1989\u5e742\u670828\u65e5\u51fa\u751f\u4e8e\u4e0a\u6d77\u5e02\uff0c\u534e\u8bed\u5f71\u89c6\u5973\u6f14\u5458\u3001\u65f6\u5c1a\u6a21\u7279\u3002' },\n        { name: '\u5510\u5ae3', age: '12', info: '1983\u5e7412\u67086\u65e5\u51fa\u751f\u4e8e\u4e0a\u6d77\u5e02\uff0c\u6bd5\u4e1a\u4e8e\u4e2d\u592e\u620f\u5267\u5b66\u9662\u8868\u6f14\u7cfb\u672c\u79d1\u73ed' },\n        { name: '\u5434\u4ea6\u51e1', age: '4', info: '1990\u5e7411\u670806\u65e5\u51fa\u751f\u4e8e\u5e7f\u4e1c\u7701\u5e7f\u5dde\u5e02\uff0c\u534e\u8bed\u5f71\u89c6\u7537\u6f14\u5458\u3001\u6d41\u884c\u4e50\u6b4c\u624b\u3002' },\n      ],\n      columns: [\n        {\n          title: (data, rowNum, colNum) => {\n            const indeterminate = this.state.dataSource.length !== this.state.checked.length && this.state.checked.length > 0;\n            const checked = this.state.dataSource.length === this.state.checked.length;\n            return (\n              <Checkbox\n                checked={checked}\n                indeterminate={indeterminate}\n                onClick={(evn) => {\n                  let checked = this.state.dataSource.map((item, idx) => idx);\n                  if(!evn.target.checked) {\n                    checked = [];\n                  }\n                  this.setState({ checked });\n                }}\n              />\n            );\n          },\n          key: 'checked',\n          render: (text, key, rowData, rowNumber, columnNumber) => {\n            return (\n              <Checkbox checked={rowData.checked} onClick={this.onClickCheckedItem.bind(this, rowNumber)} />\n            );\n          }\n        }, {\n          title: '\u540d\u5b57',\n          key: 'name',\n        }, {\n          title: '\u5e74\u9f84',\n          key: 'age',\n        }, {\n          title: '\u5730\u5740',\n          key: 'info',\n        },\n      ]\n    }\n  }\n  onClickCheckedItem(rowNumber, env) {\n    let { checked } = this.state;\n    const isChecked = env.target.checked;\n    if(isChecked) {\n      // \u6dfb\u52a0\u5230\u9009\u4e2d\u6570\u7ec4\u4e2d\n      checked.push(rowNumber)\n      checked = checked.sort((a, b) => a - b);\n    } else {\n      // \u5220\u9664\u9009\u4e2d\u9879\n      checked.splice(checked.indexOf(rowNumber), 1);\n    }\n    this.setState({ checked });\n  }\n  render() {\n    const { checked } = this.state;\n    const dataSource = this.state.dataSource.map((item, idx) => {\n      const isChecked = checked.indexOf(idx) > -1;\n      return { checked: isChecked, ...item };\n    });\n    return (\n      <div>\n        <Loader loading={this.state.loading} style={{ display: 'block' }}>\n          <Table\n            columns={this.state.columns}\n            data={dataSource}\n            footer={\n              <Pagination\n                current={2}\n                pageSize={10}\n                total={30}\n                divider\n                onChange={(current, total, pageSize) => {\n                  this.setState({ loading: true });\n                  const timer = setTimeout(() => {\n                    // \u6a21\u62df\u53d8\u66f4\u6570\u636e\n                    const dataSource = this.state.dataSource.map(item => {\n                      item.age = Number(item.age) + current;\n                      return item;\n                    });\n                    // \u7ffb\u9875 API \u83b7\u53d6\u6570\u636e\n                    this.setState({ checked: [], dataSource, loading: false });\n                  }, 2000);\n                }}\n              />\n            }\n          />\n        </Loader>\n      </div>\n    );\n  }\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## Props\n\n### Table\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| columns | \u8868\u683c\u5217\u7684\u914d\u7f6e\u63cf\u8ff0\uff0c\u53ef\u4ee5\u5185\u5d4c `children`\uff0c\u4ee5\u6e32\u67d3\u5206\u7ec4\u8868\u5934\u3002| ColumnProps[] | `[]` |\n| data | \u6570\u636e\u6570\u7ec4\u3002| Array[] | `[]` |\n| title | \u8868\u683c\u6807\u9898 | String/ReactNode/~~Function(text, key, rowData, rowNumber, columnNumber)~~/Function(data: IColumns, rowNum: number, colNum: number)`@3.0.0+` | - |\n| footer | \u8868\u683c\u5c3e\u90e8 | String/ReactNode | - |\n| bordered | \u662f\u5426\u5c55\u793a\u5916\u8fb9\u6846\u548c\u5217\u8fb9\u6846 | Boolean | - |\n| onCellHead | \u8868\u5934\u5355\u5143\u683c\u70b9\u51fb\u56de\u8c03 | ~~`Function(text, key, rowData, rowNumber, columnNumber)`~~ <br/> Function(data: IColumns, colNum: number, rowNum: number, evn: React.MouseEvent<HTMLTableCellElement>) `@3.0.0+` | - |\n| onCell | \u5355\u5143\u683c\u70b9\u51fb\u56de\u8c03 | ~~`Function(text, key, rowData, rowNumber, columnNumber)`~~ Function(data: IColumns, options:{ colNum: number, rowNum: number, keyName: string }, evn: React.MouseEvent<HTMLTableCellElement>) `@3.1.0+` | - |\n\n### ColumnProps\n\n\u5217\u63cf\u8ff0\u6570\u636e\u5bf9\u8c61\uff0c\u662f columns \u4e2d\u7684\u4e00\u9879\uff0c\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| title | \u5217\u5934\u663e\u793a\u6587\u5b57\u3002| ReactNode | - |\n| key | \u9700\u8981\u7684 key\uff0c\u53ef\u4ee5\u5ffd\u7565\u8fd9\u4e2a\u5c5e\u6027\uff0c\u5982\u679c\u6807\u9898\u5e26\u6709 `render` \u51fd\u6570\uff0c\u90a3\u4e48\u8fd9\u4e2a `key` \u4e3a\u5fc5\u987b\u975e\u5e38\u91cd\u8981\u3002| String | - |\n| width | \u5217\u5bbd\u5ea6\u3002| Number | - |\n| render | \u751f\u6210\u590d\u6742\u6570\u636e\u7684\u6e32\u67d3\u51fd\u6570\uff0c\u53c2\u6570\u5206\u522b\u4e3a\u5f53\u524d\u884c\u7684\u503c\uff0c\u5f53\u524d\u503c\u7684 `key`\uff0c\u884c\u7d22\u5f15\u6570\u636e\uff0c\u5f53\u524d\u884c\u53f7\uff0c\u5f53\u524d\u5217\u53f7\u3002| `Function(text, key, rowData, rowNumber, columnNumber)` | - |"}}]);