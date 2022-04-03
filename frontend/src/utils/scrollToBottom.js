const scrollToBottom = (ref) => {
  ref.current.parentNode.scrollTop = ref.current.offsetTop;
};

export default scrollToBottom;
