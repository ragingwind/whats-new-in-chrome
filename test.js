import test from 'ava';
import chromeRemote from 'chrome-remote-interface';

function onPageLoad(Runtime) {
  const js = `document.querySelector('#greetingButton').onclick();
  document.querySelector('#greeting').textContent`;


  return Runtime.evaluate({expression: js}).then(result => {
    console.log(result)
    return result &&
      result.result.subtype !== 'error' &&
      result.result.value.indexOf('Hello World') >= 0;
  });
}

test.cb(t => {
  chromeRemote(protocol => {
    const {Page, Runtime} = protocol;
    Promise.all([Page.enable(), Runtime.enable()]).then(() => {
      Page.reload();
      Page.domContentEventFired(() => {
        onPageLoad(Runtime).then(res => {
          t.true(res);
          t.end();  
          protocol.close();
        })
      });
    }).catch(err => {
      throw err;
    });
  }).on('error', err => {
    t.fail(err);
  });
});