(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{1105:function(n,t){n.exports="formatter 时间格式化\n===\n\n用于时间格式化，时间格式化是组件无依赖可单独使用，Node.js 后端也可以使用 [uiwjs/date-formatter](https://github.com/uiwjs/date-formatter) 。\n\n```jsx\nimport { formatter } from 'uiw';\n\nconsole.log(formatter('YYYY/MM/DD mm:ss'));\n//=> 2019-02-16 02:18\nconsole.log(formatter.utc());\n//=> 2019-02-16\n```\n\n## 基础实例\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Tag, Divider, formatter } from 'uiw';\n\nconst Demo = () => {\n  return (\n    <div>\n      <Tag title=\"formatter('YYYY ? MM # DD')\" color=\"#1C7CEB\">{formatter('YYYY ? MM # DD')}</Tag>\n      <Divider />\n      <Tag title=\"formatter.utc()\">{formatter.utc()}</Tag>\n      <Divider />\n      {formatter('YYYY / MM / DD', new Date(1987, 2, 4))}\n    </div>\n  );\n};\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## 格式化时间\n\n```js\nconsole.log(formatter('YYYYMMDD'));\n//=> 20190217\nconsole.log(formatter.utc('YYYYMMDD'));\n//=> 20190217\n\nconsole.log(formatter('YYYYMMDD:ss'));\n//=> 20190217:24\nconsole.log(formatter.utc('YYYYMMDD:ss'));\n//=> 20190217:24\n\nconsole.log(formatter('YYYY/MM/DD:mm:ss'));\n//=> 2019/02/17:46:24\nconsole.log(formatter.utc('YYYY/MM/DD:mm:ss'));\n//=> 2019/02/17:46:24\n\nconsole.log(formatter('YYYY:MM:DD'));\n//=> 2019:02:17\nconsole.log(formatter.utc('YYYY:MM:DD'));\n//=> 2019:02:17\n\nconsole.log(formatter('[YYYY:MM:DD]'));\n//=> [2019:02:17]\nconsole.log(formatter.utc('[YYYY:MM:DD]'));\n//=> [2019:02:17]\n\nconsole.log(formatter('YYYY/MM/DD'));\n//=> 2019/02/17\nconsole.log(formatter.utc('YYYY/MM/DD'));\n//=> 2019/02/17\n\nconsole.log(formatter('YYYY:MM'));\n//=> 2019:02\nconsole.log(formatter.utc('YYYY:MM'));\n//=> 2019:02\n\nconsole.log(formatter('YYYY'));\n//=> 2019\nconsole.log(formatter.utc('YYYY'));\n//=> 2019\n\nconsole.log(formatter('MM'));\n//=> 10\nconsole.log(formatter.utc('MM'));\n//=> 10\n\nconsole.log(formatter('DD'));\n//=> 26\nconsole.log(formatter.utc('DD'));\n//=> 26\n\nconsole.log(formatter('HH'));\n//=> 00\nconsole.log(formatter.utc('HH'));\n//=> 04\n\nconsole.log(formatter('mm'));\n//=> 46\nconsole.log(formatter.utc('mm'));\n//=> 46\n\nconsole.log(formatter('ss'));\n//=> 24\nconsole.log(formatter.utc('ss'));\n//=> 24\n\nconsole.log(formatter('ms'));\n//=> 186\nconsole.log(formatter.utc('ms'));\n//=> 186\n```\n\n## 时区转换\n\n`TZC` 为时区转换，有个应用场景，服务器时间时区，将时区转换成跟客户端时区一致，例如西面是转换到东八区时间。\n\n\x3c!--DemoStart,bgWhite,codePen--\x3e \n```js\nimport { Divider, formatter } from 'uiw';\n\nfunction timeZoneConverter(date, timeZone) {\n  const oldDate = new Date(date);\n  const newDate = new Date();\n  const stamp = oldDate.getTime();\n  if (!timeZone) return oldDate;\n  return (isNaN(timeZone) && !timeZone)\n    ? oldDate :\n    new Date(stamp + (newDate.getTimezoneOffset() * 60 * 1000) + (timeZone * 60 * 60 * 1000));\n}\nconst Demo = () => {\n  const date = timeZoneConverter('Wed Nov 22 2017 02:06:01 GMT+100 (CST)', 8);\n  return (\n    <div>\n      {formatter('YYYY / MM / DD', new Date(date))}\n      <Divider />\n      {date.toString()}\n    </div>\n  );\n};\n\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n## API\n\n```js\nformatter(rule: String, date: Date, utc: Number);\nformatter.utc(rule: String, date: Date);\n```\n\n下面方法，解决因时区变更，导致显示服务器时间不准确\n\n```js\nfunction timeZoneConverter(date, timeZone) {\n  const oldDate = new Date(date);\n  const newDate = new Date();\n  const stamp = oldDate.getTime();\n  if (!timeZone) return oldDate;\n  return (isNaN(timeZone) && !timeZone)\n    ? oldDate :\n    new Date(stamp + (newDate.getTimezoneOffset() * 60 * 1000) + (timeZone * 60 * 60 * 1000));\n}\n```\n\n## 格式化规则\n\n| 参数 | 说明 | 中文说明 | 实例 |\n|--------- |-------- |--------- |-------- |\n| `YYYY` | full year | 年 | 例：`2019` |\n| `MM` | month | 月 | 例：`02` |\n| `DD` | day | 天 | 例: `05` |\n| `HH` | hours | 时 | 例: `12` |\n| `mm` | minutes | 分钟 | 例: `59` |\n| `ss` | seconds | 秒 | 例: `09` |\n| `ms` | milliseconds | 毫秒 | 例: `532` |\n"}}]);