//
//  CounterViewManager.m
//  CounterApp
//
//  Created by actdigital on 13/03/21.
//

#import <Foundation/Foundation.h>
#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(CounterViewManager, RCTViewManager)
  RCT_EXPORT_VIEW_PROPERTY(count, NSNumber)
  RCT_EXPORT_VIEW_PROPERTY(onUpdate, RCTDirectEventBlock)
  RCT_EXTERN_METHOD(updateFromManager:(nonnull NSNumber *)node
                    count:(nonnull NSNumber *)count)
@end

