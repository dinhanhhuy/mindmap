import { Alert, AsyncStorage } from 'react-native'

class Helper {
    static setData(key, value, callback = null) {
        try {
            AsyncStorage.setItem(key, value)
        } catch (error) {
            Alert.alert("Can\'t sync data: " + error)
        }
    }

    static getData(key, callback = null) {
        try {
            AsyncStorage.getItem(key).then(
                (value) => {
                    if (callback) {
                        callback(value)
                    }
                }
            )
        } catch (error) {
            console.log('error: ')
        }
        
    }

    static createSampleData() {
        value = `[{"name": "Dog", "date": "Sun Nov 19 2017 21:09:13 GMT+0700 (+07)", "map": "${Helper.sampleDiv2()}"}, {"name": "Computer", "date": "Sun Nov 19 2017 19:09:13 GMT+0700 (+07)", "map": "${Helper.sampleDiv2()}"}]`
        Helper.setData('Project', value)
    }

    static sampleDiv1() {
        return "<View>\r\n        <MapNode\r\n        x={200}\r\n        y={100}\r\n        text={\"This is Atom\\n\uD83D\uDC36\uD83D\uDC36\uD83D\uDC36\"}\r\n        uri={'https://cbsnews2.cbsistatic.com/hub/i/r/2015/02/27/dc63bf50-05ee-4733-9217-4718ee9c81fe/resize/620x465/cb60f988990627112be9a03525f66c34/labrador-retriever1istock.jpg'}\r\n        />\r\n\r\n        <MapNode\r\n        x={300}\r\n        y={150}\r\n        text={\"This is Atom\\n\uD83D\uDC36\uD83D\uDC36\uD83D\uDC36\"}\r\n        uri={'https://cbsnews2.cbsistatic.com/hub/i/r/2015/02/27/dc63bf50-05ee-4733-9217-4718ee9c81fe/resize/620x465/cb60f988990627112be9a03525f66c34/labrador-retriever1istock.jpg'}\r\n        />\r\n\r\n        <MapNode\r\n        x={400}\r\n        y={200}\r\n        text={\"This is Atom\\n\uD83D\uDC36\uD83D\uDC36\uD83D\uDC36\"}\r\n        uri={'https://cbsnews2.cbsistatic.com/hub/i/r/2015/02/27/dc63bf50-05ee-4733-9217-4718ee9c81fe/resize/620x465/cb60f988990627112be9a03525f66c34/labrador-retriever1istock.jpg'}\r\n        />\r\n\r\n        <MapNode\r\n        x={500}\r\n        y={250}\r\n        text={\"This is Atom\\n\uD83D\uDC36\uD83D\uDC36\uD83D\uDC36\"}\r\n        uri={'https://cbsnews2.cbsistatic.com/hub/i/r/2015/02/27/dc63bf50-05ee-4733-9217-4718ee9c81fe/resize/620x465/cb60f988990627112be9a03525f66c34/labrador-retriever1istock.jpg'}\r\n        />\r\n\r\n      </View>"
    }

    static sampleDiv2() {
        return "create data"
    }

    static projectData(name, callback) {
        Helper.projects('Project', (projects) => {
            for (var index in projects) {
                project = projects[index]
                if (project['name'] === name) {
                    if (callback) {
                        callback(project)
                    }
                }
            }
        })
    }

    static addProject(newProject, callback = null) {
        Helper.getData('Project', (value) => {
            var json    = JSON.parse(value)
            json        = json ? json + newProject : [newProject]
            jsonString  = JSON.stringify(json)
            Helper.setData('Project', jsonString)
        })
        if (callback) {
            callback(result)
        }
    }

    static removeProject() {
        
    }

    static projects(callback) {
        Helper.getData('Project', (value) => {
            var json = JSON.parse(value)
            if (callback) {
                callback(json)
            }
        })
    }
}

export default Helper