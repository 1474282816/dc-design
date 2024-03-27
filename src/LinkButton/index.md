# 列表按钮 LinkButton

列表操作栏使用的文字按钮.

```jsx
import { LinkButton } from '@dckj/r-components';
import { Space } from 'antd';

export default () => (<Space size='large'>
    <LinkButton>这是一个按钮</LinkButton>
    <LinkButton loading={true}>这是一个按钮</LinkButton>
    <LinkButton danger>这是一个危险按钮</LinkButton>
    <LinkButton confirm>这是一个确认按钮</LinkButton>
    <LinkButton confirm danger>删除</LinkButton>
</Space>)
```
