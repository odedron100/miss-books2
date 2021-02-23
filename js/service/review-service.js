import { utilService } from './util-service.js'
import { storageService } from './async-storage-service.js'



var gKey = getKey();
const gReview = _createbooks();

export const reviewService = {
  query,
  remove,
  save,
  getEmptyReview,
  getById
}

function getKey(key) {
  console.log('key', key);
  gKey = key;
}

function query() {
  return storageService.query(gKey)
}

function remove(reviewId) {
  return storageService.remove(gKey, reviewId)
}

function save(review) {
  if (reviewId.id) {
    return storageService.put(gKey, review)
  } else {
    return storageService.post(gKey, review)
  }
}

function getEmptyReview() {
  return { name: '', rate: '', txt: '' }
}

function getById(id) {
  return storageService.get(gKey, id)
}

function _createbooks() {
  let review = utilService.loadFromStorage(gKey)
  if (!review || !review.length) {
      review = [];
      review.push(_createReview('puki', 3,'ugwuwebue'));
      review.push(_createReview('oded', 4,'jcbuyewvycuwevy'));
      review.push(_createReview('noam', 5,'jcbuyewvycuwevy'));
      review.push(_createReview('shahar', 2,'jcbuyewvycuwevy'));
      utilService.saveToStorage(gKey, review)
    }
    return review;
  }

  function _createReview(name, rate,txt) {
    const review = {
      name,
      rate,
      txt,
    }
    return review;
}
