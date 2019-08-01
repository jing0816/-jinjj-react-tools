#### API
     
属性|类型|默认|值范围|说明
---|:--:|---:|---:|---:
defaultValue | String | - | string | 内容
onChange | Function | - | Function | 回调
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