import libraries from './../mocks/data.json';

function onlyUniqueID(value, index, self) {
    return self.map(x => x._id).indexOf(value._id) === index;
}

function onlyUniqueAuthors(value, index, self) {
    return self.map(x => x.author).indexOf(value.author) === index;
}

export default {
    Query: {
        libraries: () => libraries,
        distinctBooks: () => libraries.flatMap(l => l.books).filter(onlyUniqueID),
        distinctAuthors: () => libraries.flatMap(l => l.books).filter(onlyUniqueAuthors).map(b => b.author)
    }
}