import React from 'react'
import Iframe from 'react-iframe'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Process</h1>
        <p>This interactive canvas lets you orchestrate your workflow in real time, changes made here will be pushed to the cloud.</p>
        <div>
        <Iframe url="https://www.draw.io/?lightbox=1&p=ex&highlight=0000ff&edit=_blank&layers=1&nav=1&title=next_gen_demo.drawio#R7Vpbk5owFP41PrYDCSA%2B7qq9zHTbnbozdfvGQhS6aGyIq%2FbXNyyJQKIDy6Dxsi9OckJi8p3v5JycpAP7s%2FVn4i3COxyguAOMYN2Bgw4AXdNhv6lgkwlsp5cJpiQKMpGZC0bRP8SFBpcuowAlpQ8pxjGNFmWhj%2Bdz5NOSzCMEr8qfTXBc%2FteFN0WKYOR7sSr9FQU0zKQu6ObyLyiahuKfTbG%2BmSc%2B5itJQi%2FAq4IIDjuwTzCmWWm27qM4xU7gkvX7tKd1OzGC5rROB2o8Dze%2F%2F6yTSXILB3fjxfhv9wPIRnnx4iVf8ODm4YZPmG4ECgQv5wFKBzI78HYVRhSNFp6ftq6Y2pkspLOYN0%2BiOO7jGJPXvnAymQDfZ%2FKEEvyMCi2B8%2BTYDmvhk0CEovXe1ZlbzBjXEJ4hSjbsE9HB4TBzngGb11e51kyhirCgMdHP40SZbofOsWQFDucboIUKtPc%2Ff%2FSHo1Gr6AY2cgNrF7oueIJOS%2BhCeGroWpdKXKgdWvtSobW0Q%2Btc8J4Ae7rR7SroKrCieXCTRgWs5sdekkR%2BGUm0jui4UH5kZeOjzWuDdOmGqGxEZc4mPy5WCr3Sat7ttSb6ZZNDgRKASBpgC8BL4qNqN049MkW0yiepGi1ozN6hMCEjKPZo9FKe7i4t8n%2B4xxFbyF5ztF2JCNkyea9iJCMNtA0OxUBQGijDQRnolVTbZTfnmXu1PLNq8szRyTPQk4KVXkOeQatioAPzrKeHZy3yxT4lHsDGPJA8nQWOywOx3Z1%2FRGYbp3aOMM1LxVZ%2FPGaqR%2BBrcZSwpqM0jd06ffeUb2Oamg64FqY5dZm2Z%2Fc4DtMsOT3XlGm2qZlpanbkfI%2FwTldyGUC7y1AzJNdiyILY1ZasNaq%2BHEu%2B3nSRCHpPnGqOfOvQlGqOK%2B1z8v51aKqpGaMzPWS4ctJXv8fQlCU5BTO265qx%2B%2B4xWjBjwesC1frfvg6%2FPyiES0JvkRZTE6yy4xasUt4nLdUonR36lfPvrdkkUJMqJwkU1A4U0LR5sco9IhFbBSLtb0yF9y3nnNVQ3pTIPDj0fqMrf7aDHSfg7kDdqNXSyT5TTnE3Zl9Xs7drI6d2cNZUkkHrCUa%2BgWp64y1zQbnKOjQX1LTMHodOQjx7WiZH8eamIftzU%2FXn7lH9%2BRXnFNyaBgm0Pg5w5Vsy%2BWBa1yRdq2KgxibJqvmr4Ozz%2FGk1HP4H"
        width="100%"
        height="400px"
        id="ngaConsoleIframeID"
        className="ngaConsoleIframeClass"
        display="initial"
        position="relative"/>
        </div>
        <br/>
        <div >
          <div>
            <form><label for="consoleUploadID">Upload Worflow</label>
              <br/>
              <br/>
              <input type="file" id="consoleUploadID"></input>
              <input type="submit" value="Submit"></input>
            </form>
          </div>
          <br/>
          <div>
          <a href="https://www.draw.io/?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=next_gen_demo.drawio#R7Vpbk5owFP41PrYDCSA%2B7qq9zHTbnbozdfvGQhS6aGyIq%2FbXNyyJQKIDy6Dxsi9OckJi8p3v5JycpAP7s%2FVn4i3COxyguAOMYN2Bgw4AXbvHflPBJhM4ppsJpiQKMpGZC0bRP8SFBpcuowAlpQ8pxjGNFmWhj%2Bdz5NOSzCMEr8qfTXBc%2FteFN0WKYOR7sSr9FQU0zKQu6ObyLyiahuKfTYcveOaJj%2FlKktAL8KoggsMO7BOMaVaarfsoTrETuGT9Pu1p3U6MoDmt04Eaz8PN7z%2FrZJLcwsHdeDH%2B2%2F0AslFevHjJFzy4ebjhE6YbgQLBy3mA0oHMDrxdhRFFo4Xnp60rpnYmC%2Bks5s2TKI77OMbktS%2BcTCbA95k8oQQ%2Fo0JL4Dw5tsNa%2BCQQoWi9d3XmFjPGNYRniJIN%2B0R0cDjMnGfA5vVVrjVTqCIsaEz08zhRptuhcyxZgcP5BmihAu39zx%2F94WjUKrqBjdzA2oWuC56g0xK6EJ4autalEhdqh9a%2BVGgt7dA6F7wnwJ5udLsKugqsaB7cpFEBq%2FmxlySRX0YSrSM6LpQfWdn4aPPaIF26ISobUZmzyY%2BLlUKvtJp3e62JftnkUKAEIJIG2ALwkvio2o1Tj0wRrfJJqkYLGrN3KEzICIo9Gr2Up7tLi%2Fwf7nHEFrLXHG1XIkK2TN6rGMlIA22DQzEQlAbKcFAGeiXVdtnNeeZeLc%2BsmjxzdPIM9KRgpdeQZ9CqGOjAPOvp4VmLfLFPiQewMQ8kT2eB4%2FJAbHfnH5HZxqmdI0zzUrHVH4%2BZ6hH4WhwlrOkoTWO3Tt895duYpqYDroVpTl2m7dk9jsM0S07PNWWabWpmmpodOd8jvNOVXAbQ7jLUDMm1GLIgdrUla42qL8eSrzddJILeE6eaI986NKWa40r7nLx%2FHZpqasboTA8Zrpz01e8xNGVJTsGM7bpm7L57jBbMWPC6QLX%2Bt6%2FD7w8K4ZLQW6TF1ASr7LgFq5T3SUs1SmeHfuX8e2s2CdSkykkCBbUDBTRtXqxyj0jEVoFI%2BxtT4X3LOWc1lDclMg8Ovd%2Foyp%2FtYMcJuDtQN2q1dLLPlFPcjdnX1ezt2sipHZw1lWTQeoKRb6Ca3njLXFCusg7NBTUts8ehkxDPnpbJUby5acj%2B3FT9uXtUf37FOQW3pkECrY8DXPmWTD6Y1jVJ16oYqLFJsmr%2BKjj7PH9aDYf%2FAQ%3D%3D" download>
          Download Workflow
          </a>
          </div>
        </div>
      </div>
    )
  }
}
export default App
