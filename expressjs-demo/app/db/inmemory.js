function InMemoryDatabase(name) {
  const _repo = {}

  _ensureIdIsSet = id => {
    if (id === null)
      throw 'ID is required'
  }

  const _promiseWrapper = func => {
    return new Promise((resolve, reject) => {
      try {
        const result = func()
        resolve(result)
      } catch (err) {
        reject(err)
      }
    })
  }

  return {
    getName: () => name,

    all: () => {
      return _promiseWrapper(() => {
        return Object.keys(_repo).map(key => _repo[key])
      })
    },

    findById: id => {
      return _promiseWrapper(() => {
        _ensureIdIsSet(id)
        const found = _repo[id]
        return found
      })
    },

    add: item => {
      return _promiseWrapper(() => {
        _ensureIdIsSet(item.id)
        _repo[item.id] = item
        return item
      })
    },

    update: function (item) {
      const that = this
      return _promiseWrapper(() => {
        let itemToUpdate = that.findById(item.id)
        itemToUpdate = { ...itemToUpdate, ...item }
        _repo[item.id] = itemToUpdate
        return itemToUpdate
      })
    },

    remove: function (id) {
      const that = this
      return _promiseWrapper(() => {
        itemToRemove = that.findById(id)
        delete _repo[id]
        return itemToRemove
      })
    }
  }
}

module.exports = InMemoryDatabase