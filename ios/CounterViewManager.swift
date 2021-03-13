//
//  CounterViewManager.swift
//  CounterApp
//
//  Created by actdigital on 13/03/21.
//

import Foundation

@objc(CounterViewManager)
class CounterViewManager: RCTViewManager {
  override func view() -> UIView! {
    return CounterView()
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  @objc func updateFromManager(_ node: NSNumber, count: NSNumber){
    DispatchQueue.main.async {
      let component = self.bridge.uiManager.view(forReactTag: node) as! CounterView
      component.update(value: count)
    }
  }

  
}

