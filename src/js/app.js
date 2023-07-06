// TODO: write your code here

class ErrorRepository {
  constructor() {
    this.errorRepository = new Map();
  }

  translate(code) {
    return this.errorRepository.has(code) ? this.errorRepository.get(code) : 'Unknown error';
  }
}

const errorRepository = new ErrorRepository();
export default errorRepository;
