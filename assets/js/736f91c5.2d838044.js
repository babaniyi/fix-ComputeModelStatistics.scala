"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[5642],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=o,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||a;return t?r.createElement(f,s(s({ref:n},m),{},{components:t})):r.createElement(f,s({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},314:function(e,n,t){t.r(n),t.d(n,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],i={title:"Interpretability - Snow Leopard Detection",hide_title:!0,status:"stable",name:"Interpretability - Snow Leopard Detection"},l=void 0,p={unversionedId:"features/responsible_ai/Interpretability - Snow Leopard Detection",id:"features/responsible_ai/Interpretability - Snow Leopard Detection",title:"Interpretability - Snow Leopard Detection",description:"Automated Snow Leopard Detection with Synapse Machine Learning",source:"@site/docs/features/responsible_ai/Interpretability - Snow Leopard Detection.md",sourceDirName:"features/responsible_ai",slug:"/features/responsible_ai/Interpretability - Snow Leopard Detection",permalink:"/SynapseML/docs/next/features/responsible_ai/Interpretability - Snow Leopard Detection",tags:[],version:"current",frontMatter:{title:"Interpretability - Snow Leopard Detection",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Interpretability - PDP and ICE explainer",permalink:"/SynapseML/docs/next/features/responsible_ai/Interpretability - PDP and ICE explainer"},next:{title:"Interpretability - Tabular SHAP explainer",permalink:"/SynapseML/docs/next/features/responsible_ai/Interpretability - Tabular SHAP explainer"}},m={},u=[{value:"Automated Snow Leopard Detection with Synapse Machine Learning",id:"automated-snow-leopard-detection-with-synapse-machine-learning",level:2},{value:"Your results will look like:",id:"your-results-will-look-like",level:3}],c={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"automated-snow-leopard-detection-with-synapse-machine-learning"},"Automated Snow Leopard Detection with Synapse Machine Learning"),(0,a.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/SnowLeopardAD/SLTrust.PNG",width:"900"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import os\nfrom pyspark.sql import SparkSession\nfrom synapse.ml.core.platform import running_on_synapse, find_secret\n\n# Bootstrap Spark Session\nspark = SparkSession.builder.getOrCreate()\n\nif running_on_synapse():\n    from notebookutils.visualization import display\n\nbing_search_key = find_secret("bing-search-key")\n\n# WARNING this notebook requires a lot of memory.\n# If you get a heap space error, try dropping the number of images bing returns\n# or by writing out the images to parquet first\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.cognitive import *\nfrom synapse.ml.core.spark import FluentAPI\nfrom pyspark.sql.functions import lit\n\n\ndef bingPhotoSearch(name, queries, pages):\n    offsets = [offset * 10 for offset in range(0, pages)]\n    parameters = [(query, offset) for offset in offsets for query in queries]\n\n    return (\n        spark.createDataFrame(parameters, ("queries", "offsets"))\n        .mlTransform(\n            BingImageSearch()  # Apply Bing Image Search\n            .setSubscriptionKey(bing_search_key)  # Set the API Key\n            .setOffsetCol("offsets")  # Specify a column containing the offsets\n            .setQueryCol("queries")  # Specify a column containing the query words\n            .setCount(10)  # Specify the number of images to return per offset\n            .setImageType("photo")  # Specify a filter to ensure we get photos\n            .setOutputCol("images")\n        )\n        .mlTransform(BingImageSearch.getUrlTransformer("images", "urls"))\n        .withColumn("labels", lit(name))\n        .limit(400)\n    )\n')),(0,a.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/SparkSummit2/cog_services.png",width:"900"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def displayDF(df, n=5, image_cols=set(["urls"])):\n    rows = df.take(n)\n    cols = df.columns\n    header = "".join(["<th>" + c + "</th>" for c in cols])\n\n    style = """\n<!DOCTYPE html>\n<html>\n<head>\n\n</head>"""\n\n    table = []\n    for row in rows:\n        table.append("<tr>")\n        for col in cols:\n            if col in image_cols:\n                rep = \'<img src="{}",  width="100">\'.format(row[col])\n            else:\n                rep = row[col]\n            table.append("<td>{}</td>".format(rep))\n        table.append("</tr>")\n    tableHTML = "".join(table)\n\n    body = """\n<body>\n<table>\n  <tr>\n    {} \n  </tr>\n  {}\n</table>\n</body>\n</html>\n  """.format(\n        header, tableHTML\n    )\n    try:\n        displayHTML(style + body)\n    except:\n        pass\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'snowLeopardQueries = ["snow leopard"]\nsnowLeopardUrls = bingPhotoSearch("snow leopard", snowLeopardQueries, pages=100)\ndisplayDF(snowLeopardUrls)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'randomWords = spark.read.parquet(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/random_words.parquet"\n).cache()\nrandomWords.show()\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'randomLinks = (\n    randomWords.mlTransform(\n        BingImageSearch()\n        .setSubscriptionKey(bing_search_key)\n        .setCount(10)\n        .setQueryCol("words")\n        .setOutputCol("images")\n    )\n    .mlTransform(BingImageSearch.getUrlTransformer("images", "urls"))\n    .withColumn("label", lit("other"))\n    .limit(400)\n)\n\ndisplayDF(randomLinks)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'images = (\n    snowLeopardUrls.union(randomLinks)\n    .distinct()\n    .repartition(100)\n    .mlTransform(\n        BingImageSearch.downloadFromUrls("urls", "image", concurrency=5, timeout=5000)\n    )\n    .dropna()\n)\n\ntrain, test = images.randomSplit([0.7, 0.3], seed=1)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.ml import Pipeline\nfrom pyspark.ml.feature import StringIndexer\nfrom pyspark.ml.classification import LogisticRegression\nfrom pyspark.sql.functions import udf\nfrom synapse.ml.downloader import ModelDownloader\nfrom synapse.ml.cntk import ImageFeaturizer\nfrom synapse.ml.stages import UDFTransformer\nfrom pyspark.sql.types import *\n\n\ndef getIndex(row):\n    return float(row[1])\n\n\nif running_on_synapse():\n    network = ModelDownloader(\n        spark, "abfss://synapse@mmlsparkeuap.dfs.core.windows.net/models/"\n    ).downloadByName("ResNet50")\nelse:\n    network = ModelDownloader(spark, "dbfs:/Models/").downloadByName("ResNet50")\n\nmodel = Pipeline(\n    stages=[\n        StringIndexer(inputCol="labels", outputCol="index"),\n        ImageFeaturizer(\n            inputCol="image", outputCol="features", cutOutputLayers=1\n        ).setModel(network),\n        LogisticRegression(maxIter=5, labelCol="index", regParam=10.0),\n        UDFTransformer()\n        .setUDF(udf(getIndex, DoubleType()))\n        .setInputCol("probability")\n        .setOutputCol("leopard_prob"),\n    ]\n)\n\nfitModel = model.fit(train)\n')),(0,a.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/SnowLeopardAD/SLPipeline.PNG",width:"900"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def plotConfusionMatrix(df, label, prediction, classLabels):\n    from synapse.ml.plot import confusionMatrix\n    import matplotlib.pyplot as plt\n\n    fig = plt.figure(figsize=(4.5, 4.5))\n    confusionMatrix(df, label, prediction, classLabels)\n    display(fig)\n\n\nif not running_on_synapse():\n    plotConfusionMatrix(\n        fitModel.transform(test), "index", "prediction", fitModel.stages[0].labels\n    )\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import urllib.request\nfrom synapse.ml.lime import ImageLIME\n\ntest_image_url = (\n    "https://mmlspark.blob.core.windows.net/graphics/SnowLeopardAD/snow_leopard1.jpg"\n)\nwith urllib.request.urlopen(test_image_url) as url:\n    barr = url.read()\ntest_subsample = spark.createDataFrame([(bytearray(barr),)], ["image"])\n\nlime = (\n    ImageLIME()\n    .setModel(fitModel)\n    .setPredictionCol("leopard_prob")\n    .setOutputCol("weights")\n    .setInputCol("image")\n    .setCellSize(100.0)\n    .setModifier(50.0)\n    .setNSamples(300)\n)\n\nresult = lime.transform(test_subsample)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import matplotlib.pyplot as plt\nimport PIL, io, numpy as np\n\n\ndef plot_superpixels(row):\n    image_bytes = row["image"]\n    superpixels = row["superpixels"]["clusters"]\n    weights = list(row["weights"])\n    mean_weight = np.percentile(weights, 90)\n    img = (PIL.Image.open(io.BytesIO(image_bytes))).convert("RGBA")\n    image_array = np.asarray(img).copy()\n    for (sp, w) in zip(superpixels, weights):\n        if w > mean_weight:\n            for (x, y) in sp:\n                image_array[y, x, 1] = 255\n                image_array[y, x, 3] = 200\n    plt.clf()\n    plt.imshow(image_array)\n    display()\n\n\n# Gets first row from the LIME-transformed data frame\nif not running_on_synapse():\n    plot_superpixels(result.take(1)[0])\n')),(0,a.kt)("h3",{id:"your-results-will-look-like"},"Your results will look like:"),(0,a.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/SnowLeopardAD/lime_results.png",width:"900"}))}d.isMDXComponent=!0}}]);