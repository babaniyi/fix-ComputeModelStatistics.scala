"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[9592],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},374:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={title:"DeepLearning - CIFAR10 Convolutional Network",hide_title:!0,status:"stable",name:"DeepLearning - CIFAR10 Convolutional Network"},s=void 0,p={unversionedId:"features/other/DeepLearning - CIFAR10 Convolutional Network",id:"features/other/DeepLearning - CIFAR10 Convolutional Network",title:"DeepLearning - CIFAR10 Convolutional Network",description:"DeepLearning - CIFAR10 Convolutional Network",source:"@site/docs/features/other/DeepLearning - CIFAR10 Convolutional Network.md",sourceDirName:"features/other",slug:"/features/other/DeepLearning - CIFAR10 Convolutional Network",permalink:"/SynapseML/docs/next/features/other/DeepLearning - CIFAR10 Convolutional Network",tags:[],version:"current",frontMatter:{title:"DeepLearning - CIFAR10 Convolutional Network",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"DeepLearning - BiLSTM Medical Entity Extraction",permalink:"/SynapseML/docs/next/features/other/DeepLearning - BiLSTM Medical Entity Extraction"},next:{title:"DeepLearning - Flower Image Classification",permalink:"/SynapseML/docs/next/features/other/DeepLearning - Flower Image Classification"}},u={},c=[{value:"DeepLearning - CIFAR10 Convolutional Network",id:"deeplearning---cifar10-convolutional-network",level:2}],m={toc:c};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"deeplearning---cifar10-convolutional-network"},"DeepLearning - CIFAR10 Convolutional Network"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.cntk import CNTKModel\nfrom synapse.ml.downloader import ModelDownloader\nfrom pyspark.sql.functions import udf\nfrom pyspark.sql.types import IntegerType\nfrom os.path import abspath\nfrom pyspark.sql import SparkSession\n\n# Bootstrap Spark Session\nspark = SparkSession.builder.getOrCreate()\n\nfrom synapse.ml.core.platform import running_on_synapse\n\nif running_on_synapse():\n    from notebookutils.visualization import display\n")),(0,a.kt)("p",null,"Set some paths."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'cdnURL = "https://mmlspark.azureedge.net/datasets"\n\n# Please note that this is a copy of the CIFAR10 dataset originally found here:\n# http://www.cs.toronto.edu/~kriz/cifar-10-python.tar.gz\nimagesWithLabels = spark.read.parquet(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/CIFAR10_test.parquet"\n)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'modelName = "ConvNet"\nif running_on_synapse():\n    modelDir = "abfss://synapse@mmlsparkeuap.dfs.core.windows.net/models/"\nelse:\n    modelDir = "dbfs:/models/"\n')),(0,a.kt)("p",null,"Get the model"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"d = ModelDownloader(spark, modelDir)\nmodel = d.downloadByName(modelName)\n")),(0,a.kt)("p",null,"Evaluate CNTK model."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import time\n\nstart = time.time()\n\n# Use CNTK model to get log probabilities\ncntkModel = (\n    CNTKModel()\n    .setInputCol("images")\n    .setOutputCol("output")\n    .setModelLocation(model.uri)\n    .setOutputNode("z")\n)\nscoredImages = cntkModel.transform(imagesWithLabels)\n\n# Transform the log probabilities to predictions\ndef argmax(x):\n    return max(enumerate(x), key=lambda p: p[1])[0]\n\n\nargmaxUDF = udf(argmax, IntegerType())\nimagePredictions = scoredImages.withColumn("predictions", argmaxUDF("output")).select(\n    "predictions", "labels"\n)\n\nnumRows = imagePredictions.count()\n\nend = time.time()\nprint("classifying {} images took {} seconds".format(numRows, end - start))\n')),(0,a.kt)("p",null,"Plot confusion matrix."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'imagePredictions = imagePredictions.toPandas()\ny, y_hat = imagePredictions["labels"], imagePredictions["predictions"]\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import matplotlib.pyplot as plt\nimport numpy as np\nfrom sklearn.metrics import confusion_matrix\n\ncm = confusion_matrix(y, y_hat)\n\nlabels = [\n    "airplane",\n    "automobile",\n    "bird",\n    "cat",\n    "deer",\n    "dog",\n    "frog",\n    "horse",\n    "ship",\n    "truck",\n]\nplt.imshow(cm, interpolation="nearest", cmap=plt.cm.Blues)\nplt.colorbar()\ntick_marks = np.arange(len(labels))\nplt.xticks(tick_marks, labels, rotation=90)\nplt.yticks(tick_marks, labels)\nplt.xlabel("Predicted label")\nplt.ylabel("True Label")\ndisplay(plt.show())\n')))}d.isMDXComponent=!0}}]);