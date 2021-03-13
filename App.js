import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  requireNativeComponent,
  StyleSheet,
  UIManager,
  findNodeHandle
} from 'react-native';


const CounterView = requireNativeComponent("CounterView")

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 60
  },
  item: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }

  _increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  _update = e => {
    this.setState({
      count: e.nativeEvent.count
    })
  }

  _updateNative = () => {
    UIManager.dispatchViewManagerCommand(findNodeHandle(this.counterRef), UIManager["CounterView"].Commands.updateFromManager, [this.state.count])
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.item} 
                            onPress={() => this._increment()} 
                            onLongPress={this._updateNative}>
            <Text style={styles.text}>{this.state.count}</Text>
          </TouchableOpacity>
          <CounterView style={styles.item} 
                       count={this.state.count} 
                       onUpdate={this._update}
                       ref={e => this.counterRef = e} />
        </View>
      </ScrollView>
    )
  }
}

export default App;
