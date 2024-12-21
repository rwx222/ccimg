const formatBytes = (bytes: number) => {
  const ONE_MB = 1024 * 1024

  if (typeof bytes !== 'number') {
    return '---'
  }

  if (bytes >= ONE_MB) {
    return Number((bytes / ONE_MB).toFixed(2)).toLocaleString() + ' MB'
  } else {
    return Number((bytes / 1024).toFixed(2)).toLocaleString() + ' KB'
  }
}

export default formatBytes
