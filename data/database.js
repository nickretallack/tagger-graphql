/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

var fs = require('fs');

// Model types
class User extends Object {}
class Widget extends Object {}
class File extends Object {
  constructor({id, url}) {
    super();
    this.id = id;
    this.url = url;
  }
}

// Mock data
var viewer = new User();
viewer.id = '1';
viewer.name = 'Anonymous';
var widgets = ['What\'s-it', 'Who\'s-it', 'How\'s-it'].map((name, i) => {
  var widget = new Widget();
  widget.name = name;
  widget.id = `${i}`;
  return widget;
});

let getFiles = () => fs.readdirSync('public/files').map(path => new File({id: path, path: path}))
let getFile = (id) => new File({id: id, path: id})

module.exports = {
  // Export methods that your schema can use to interact with your database
  getUser: (id) => id === viewer.id ? viewer : null,
  getViewer: () => viewer,
  getWidget: (id) => widgets.find(w => w.id === id),
  getWidgets: () => widgets,
  User,
  Widget,
};
