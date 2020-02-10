#### 发包步骤
1、npm run dev 本地测试

2、npm run build 编译生成lib文件

3、cnpm publish 发包

>tips:包内样式使用.css

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