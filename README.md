#### API
     
属性|类型|默认|值范围|说明
---|:--:|---:|---:|---:
content | string | 空 | string | 内容
direction | string | 'bottom' | 'top', 'right', 'bottom', 'left' | 位置
trigger | string | 'click' 'top', 'click', 'focus', 'hover' | 显示事件
theme | string | '空' | 'brand', 'primary', 'success', 'warning', 'error', 'muted' | 主题
cursorOffset | Number | 0 | - | 箭头相对中轴偏移量
bubbleOffset | Number | 0 | - | 气泡偏移量
bubbleSpace | Number | 0 | - | 气泡与元素之间的距离
zIndex | Number | 0 | - | 层级
- | - | - | - | -
  
  
------
  
#### Code 演示
  
<!--start-code-->
  
```js
//Demo为组件名字
  
class Demo extends React.Component {
  componentDidMount () {
    
  }
  render(){
    return (
      <div>
        <button type="button" class="btn primary" data-selector="bubble">气泡(带title)</button>
      </div>
    )
  }
}
ReactDOM.render(<div><Demo/></div>);