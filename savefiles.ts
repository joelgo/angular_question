 private saveFileStore(files: any) {
    const formData: FormData = new FormData();
    console.log(this.filesPDF[0]);
    console.log(this.filesPDF);
    Array.from(this.filesPDF).forEach(function(i: any) {
      formData.append('file[]', i);
    });
    // formData.append('file', this.filesPDF);
    formData.append('directory', this.configFile.directory);
    return this.storageService.add$(formData)
      .pipe(
        takeUntil(this.destroy$),
      );
  }
