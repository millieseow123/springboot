package com.example.project.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder.EndpointConfiguration;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

@Configuration
public class AppConfig {

	@Value("${BUCKET_SECRET}")
	private String secretKey;

	@Value("${BUCKET_ACCESS}")
	private String accessKey;


	@Bean
	public AmazonS3 createS3Client() {

		final String accessKey = "DO00ED4CLTRCNFNQUN6R";
		final String secretKey = "97wcGF5xYD9Ee1nAjI5DAYAy/UUytPBqjOg2s8xl72s";


		EndpointConfiguration epConfig = new EndpointConfiguration("sgp1.digitaloceanspaces.com", "sgp1");
		BasicAWSCredentials cred = new BasicAWSCredentials(accessKey, secretKey);

		return AmazonS3ClientBuilder.standard()
			.withEndpointConfiguration(epConfig)
			.withCredentials(new AWSStaticCredentialsProvider(cred))
			.build();
	}
	
}
